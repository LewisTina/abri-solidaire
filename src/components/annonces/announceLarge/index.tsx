interface Announce {
    image?: any
    Title: string
    startDate: any
    endDate: any
    address: string

}

export default function AnnounceLarge(props: Announce) {
    const {image, Title, startDate, endDate, address} = props
    return (
        <div className="rounded-lg bg-white dark:bg-black w-full h-28 my-2 flex overflow-hidden cursor-pointer">
            <div className="h-full aspect-square bg-gray-400">

            </div>
            
            <div className="p-2 flex flex-col justify-between text-sm">
                <span className="font-bold block">
                    {Title}
                </span>

                <span className="text-xs block text-gray-400">
                    du &nbsp; <b className="text-primary">{(new Date(startDate))?.toLocaleString( "fr" , { day: "numeric", month: "long", year :"numeric" })}</b>
                    &nbsp; 
                    au &nbsp; <b className="text-primary">{(new Date(endDate))?.toLocaleString( "fr" , { day: "numeric", month: "long", year :"numeric" })}</b>
                </span>
                
                <div className="flex text-gray-400">
                    <i className="material-icons text-sm">
                        location_on
                    </i>
                    <span className="text-sm">
                        {address}
                    </span>
                </div>

                <span>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus culpa laboriosam ex quasi obcaecati soluta optio eveniet.
                </span>
            </div>
        </div>
    )
}