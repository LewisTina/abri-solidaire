import OptionLink from "@/src/components/CategorieLink";
import Layout from "@/src/components/Layout";
import AnnounceLarge from "@/src/components/annonces/announceLarge";
import AnnounceSmall from "@/src/components/annonces/announceSmall";
import { NextPage } from "next/types";

const Home : NextPage = () => {
    return (
        <Layout title="Acceuil">
            <div className="" ></div>
            <div className="flex pt-16">
                <div className="w-1/4 m-4 p-4 rounded-md bg-gray-100 dark:bg-gray-900 ring-opacity-5 focus:outline-none" id="aside">
                    <span className="text-2xl mb-8 font-bold block text-center">
                        Catégories
                    </span>

                    <OptionLink label="Aide médicale"/>
                    <OptionLink label="Aide alimentaire"/>
                    <OptionLink label="Aide financière"/>
                    <OptionLink label="Aide Logement"/>
                    <OptionLink label="Aide Vêtements"/>
                </div>

                <div className="w-1/2 my-4 p-4 rounded-md bg-gray-100 dark:bg-gray-900 ring-opacity-5 focus:outline-none" id="center">
                    <span className="text-2xl mb-8 font-bold block text-center">
                        Dernières Annonces
                    </span>

                    <AnnounceLarge 
                        Title={"Assistance médicale"} 
                        startDate={"06/12/2023"} 
                        endDate={"06/28/2023"} 
                        address={"25 rue des cité, 69360 Solaize"} />


                </div>

                <div className="w-1/4 m-4 p-4 rounded-md bg-gray-100 dark:bg-gray-900 ring-opacity-5 focus:outline-none" id="aside">
                    <span className="text-2xl mb-8 font-bold block text-center">
                        Mes annonces sur mesure
                    </span>

                    <AnnounceSmall 
                        Title={"Assistance médicale"} 
                        startDate={"06/12/2023"} 
                        endDate={"06/28/2023"} 
                        address={"25 rue des cité, 69360 Solaize"} />
                </div>
            </div>
        </Layout>
    )
}

export default Home