import DashboardLink from "@/src/components/DashboardLink";
import Layout from "@/src/components/Layout";

export default function Dashboard(props: any) {
    const {children } = props
    return(
        <Layout title="Dashboard">
            <div className="flex pt-16 h-screen w-full">
                <div className="bg-gray-100 dark:bg-gray-900 h-full w-80 px-2 py-8 border-r-2 dark:border-gray-800" id="dashboard-aside">
                    <DashboardLink 
                        label={"Ajouter une annonce"}
                        icon={"add_circle"}
                        path={"new-announce"}
                        />

                    <DashboardLink 
                        label={"Ajouter un évènement"}
                        icon={"event"} path={"dashboard/new-event"}/>

                    <DashboardLink 
                        label={"Mes annonces"}
                        icon={"feed"} path={"dashboard/my-announce"}/>

                    <DashboardLink 
                        label={"Faire un don à une association"}
                        icon={"money"} path={"/donation"}/>
                </div>

                {children}
            </div>
        </Layout>
    )
}