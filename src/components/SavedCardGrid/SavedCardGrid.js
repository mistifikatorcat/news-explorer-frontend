import Card from "../Card/Card";


function SavedCardGrid({savedArticles, onDelete}){
   
    return (
        <section className="grid grid_saved">
            <ul className="grid__gallery">
                {savedArticles && savedArticles.map((card) => {
                    <Card 
                    article={card}
                    key={card._id}
                    onDelete={onDelete}
                    />
                })
            }
            </ul>
        </section>
    )
}

export default SavedCardGrid;