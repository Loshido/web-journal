import Lien from "~/components/Lien";
import Header from "~/components/header"
import Footer from "~/components/footer"

export default () => 
    <div>
        <Header/>
        <div className="p-5">
            <p>
                /articles
            </p>
            <p>
                On liste tous les articles sur cette page
            </p>

            <Lien to={`/articles/` + Math.floor(Math.random() * 9999999999).toString(36)} >
                aller à un article random
            </Lien>
            <Lien to="/">
                aller à la page d'accueil
            </Lien>
        </div>
        <Footer/>
    </div>