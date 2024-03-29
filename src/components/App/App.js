import React from 'react';
import {Navigate, Route, Routes, useNavigate} from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import LoginPopup from '../LoginPopup/LoginPopup';
import RegisterPopup from '../RegisterPopup/RegisterPopup';
import SavedNews from '../SavedNews/SavedNews';
import InfoToolTip from '../InfoToolTip/InfoToolTip';
import MobileMenu from '../MobileMenu/MobileMenu';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import {CurrentUserContext} from '../../contexts/CurrentUserContext';

//api imports
import * as auth from '../../utils/auth';
import newsApi from '../../utils/NewsApi';
import mainApi from '../../utils/MainApi';

function App() {
	const history = useNavigate();

	//authorization & context

	const [currentUser, setCurrentUser] = React.useState({});
	const [isLoggedIn, setIsLoggedIn] = React.useState(false);
	const [isCheckingToken, setIsCheckingToken] = React.useState(true);
	const [userData, setUserData] = React.useState({username: 'Foma Kiniaev'});

	//search

	const [isLoading, setIsLoading] = React.useState(false);
	const [foundArticles, setFoundArticles] = React.useState([]);
	const articles = React.useRef([]);

	//popups

	const [isLoginPopupOpen, setIsLoginPopupOpen] = React.useState(false);
	const [isRegisterPopupOpen, setIsRegisterPopupOpen] = React.useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
	const [isInfoToolTipOpen, setIsInfoToolTipOpen] = React.useState(false);

	//articles

	const [savedArticles, setSavedArticles] = React.useState([]);
	const [cards, setCards] = React.useState([]);
	const [searchData, setSearchData] = React.useState({search: 'Economics'});
	const [keyword, setKeyword] = React.useState('');

	//errors

	const [isServerError, setIsServerError] = React.useState(false);
	const [isClientError, setIsClientError] = React.useState('');

	//initial api effects
	//checking token

	React.useEffect(() => {
		const token = localStorage.getItem('jwt');
		if (token) {
			auth
				.checkTokenValidity(token)
				.then((res) => {
					//console.log("checking token ", res);
					if (res._id) {
						//(res._id)
						setIsLoggedIn(true);
						setUserData({username: res.username});
						// console.log(
						//   "res.username: " + res.username + " current userdata " + userData
						// );
					} else {
						localStorage.removeItem('jwt');
						setIsLoginPopupOpen(true);
						setIsLoggedIn(false);
					}
				})
				.catch((err) => {
					console.log(err);
					setIsLoginPopupOpen(true);
					setIsLoggedIn(false);
					localStorage.removeItem('jwt');
				})
				.finally(() => {
					setIsCheckingToken(false);
				});
		}
	}, []);

	//getting user info

	// React.useEffect(() => {
	//   const token = localStorage.getItem('jwt');
	//   if (token) {
	//     mainApi
	//       .getUserInfo(token)
	//       .then(res => {
	//         console.log('getting user info ', res);
	//         setCurrentUser(res);
	//       })
	//       .catch((err) => {
	//         console.log(err);
	//       });
	//   }
	// }, [isLoggedIn]);

	//getting info on user's saved articles

	React.useEffect(() => {
		const token = localStorage.getItem('jwt');
		if (token) {
			mainApi
				.getSavedArticles(token) //(token)?
				.then((res) => {
					//console.log('getting saved articles info ', res);
					articles.current = res;
					setSavedArticles(articles.current);
				})
				.catch((err) => {
					console.log(err);
				});
		}
	}, [currentUser]);

	//handlers
	//authorization handlers

	function handleRegister({username, email, password}) {
		auth
			.register(username, email, password)
			.then((res) => {
				if (res) {
					closeAllPopups();
					console.log('user added');
					setIsInfoToolTipOpen(true);
				} else {
					setIsInfoToolTipOpen(false);
				}
			})
			.catch((err) => {
				console.log(err);
				console.log('user not added');
				if (err === 'Error 409') setIsClientError('This email or username is in use ');
				else {
					setIsClientError('Something else wrong on handleRegister function ');
				}
				setIsInfoToolTipOpen(false);
			});
	}

	function handleLogin({email, password}) {
		auth
			.login(email, password)
			.then((res) => {
				if (res.token) {
					setIsLoggedIn(true);
					setUserData({email});
					setCurrentUser(res.user);
					localStorage.setItem('jwt', res.token);
					//setToken(res.token);
					history('/');
					window.location.reload(true);
				}
			})
			.catch((err) => {
				console.log(err);
				if (err === 'Error 400') setIsClientError('Wrong Email or Password ');
				else {
					setIsClientError('Something else wrong on handleLogin function ');
				}
			})
			.finally(() => {
				setIsCheckingToken(false);
			});
	}

	function signout() {
		setIsLoggedIn(false);
		setCurrentUser({});
		localStorage.removeItem('jwt');
		setIsLoginPopupOpen(true);
	}

	//article handlers

	//search

	function handleSearch({searchTerm}) {
		if (searchTerm !== '') {
			setIsLoading(true);
			setKeyword(searchTerm);
			newsApi
				.getArticles(searchTerm)
				.then((res) => {
					console.log('getArticles on handleSearch', searchTerm);
					if (res.articles) {
						setSearchData({searchTerm});
						articles.current = res.articles;
						setFoundArticles(articles.current);
						console.log(articles.current.slice(0, 1));
						console.log(articles.source);
					}
				})
				.catch((err) => {
					console.log(err);
				})
				.finally(() => {
					setIsLoading(false);
				});
		}
	}

	//save

	function handleSave({
		_id,
		keyword,
		title,
		text,
		description,
		source,
		date,
		publishedAt,
		link,
		url,
		image,
		urlToImage,
	}) {
		mainApi
			.saveArticle({
				_id,
				keyword: source.name,
				source: source.name,
				title,
				text: description,
				date: publishedAt,
				link: url,
				image: urlToImage,
			}) //do I need token there?
			.then((savedArticle) => {
				setSavedArticles([...savedArticles, savedArticle]);
			})
			.catch((err) => {
				console.log(err);
			});
	}

	//remove from saved

	function handleRemove(cardId) {
		savedArticles.map((removedCard) => {
			cardId = removedCard._id;
			console.log(cardId);
		});
		mainApi
			.deleteArticle(cardId)
			.then((res) => {
				setCurrentUser((currentUser) => ({
					...currentUser,
					savedArticles: savedArticles.map((removedCard) => removedCard._id !== res._id),
				}));
			})
			.catch((err) => console.log(err));
	}

	//show more cards

	// function handleMore() {
	// 	setFoundArticles(articles.current.slice(foundArticles, foundArticles.length + 3));
	// 	console.log('handle more ' + articles.current.slice(0, foundArticles.length + 3));
	// }

	//popups

	function closeAllPopups() {
		setIsLoginPopupOpen(false);
		setIsRegisterPopupOpen(false);
		setIsInfoToolTipOpen(false);
		setIsMobileMenuOpen(false);
	}

	function handleLoginClick() {
		setIsLoginPopupOpen(true);
		setIsClientError('');
	}

	function handleRegisterClick() {
		setIsClientError('');
		setIsRegisterPopupOpen(true);
	}

	function handleMobileMenuClick() {
		setIsMobileMenuOpen(true);
	}

	function handleSearchClick() {
		setIsLoading(true);
	}

	return (
		<CurrentUserContext.Provider value={currentUser}>
			<div className='app'>
				<MobileMenu
					isOpen={isMobileMenuOpen}
					onLoginClick={handleLoginClick}
					onRegisterClick={handleRegisterClick}
					onClose={closeAllPopups}
					onLogout={signout}
				/>
				<Header
					isLoggedIn={isLoggedIn}
					username={userData.username}
					onLoginClick={handleLoginClick}
					onRegisterClick={handleRegisterClick}
					onMobileMenuClick={handleMobileMenuClick}
					onLogout={signout}
					onSearch={handleSearch}
					onSearchClick={handleSearchClick}
				/>
				<Routes>
					<Route
						path='/saved-articles'
						element={
							<ProtectedRoute isLoggedIn={isLoggedIn}>
								<SavedNews
									username={userData.username}
									savedArticles={savedArticles}
									cards={cards}
									onDelete={handleRemove}
								/>
							</ProtectedRoute>
						}
					/>
					<Route
						path='/'
						element={
							<Main
								isLoggedIn={isLoggedIn}
								isLoading={isLoading}
								foundArticles={foundArticles}
								savedArticles={savedArticles}
								searchData={searchData}
								keyword={keyword}
								setSearchData={setSearchData}
								onSave={handleSave}
								onDelete={handleRemove}
								isServerError={isServerError}
								// onMore={handleMore}
								onLoginClick={handleLoginClick}
							/>
						}
					/>
					<Route path='*' element={<Navigate to='/' />} />
				</Routes>
				<LoginPopup
					isOpen={isLoginPopupOpen}
					onClose={closeAllPopups}
					onRegisterClick={handleRegisterClick}
					onLogin={handleLogin}
					isClientError={isClientError}
				/>
				<RegisterPopup
					isOpen={isRegisterPopupOpen}
					onClose={closeAllPopups}
					onLoginClick={handleLoginClick}
					onRegister={handleRegister}
					isClientError={isClientError}
				/>
				<InfoToolTip
					isOpen={isInfoToolTipOpen}
					onClose={closeAllPopups}
					onLoginClick={handleLoginClick}
				/>
				<Footer />
			</div>
		</CurrentUserContext.Provider>
	);
}

export default App;
