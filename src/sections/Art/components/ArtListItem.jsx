import { PublicationHistoryList } from "./PublicationHistoryList";


export default function ArtListItem(props) {
    const { art } = props

    return(
        <><div className="frame">
            <img
                src={"https://boolean-uk-api-server.fly.dev" + art.imageURL} />
        </div>
        <h3>{art.title}</h3>
        <p>Artist: {art.artist}</p>
        <PublicationHistoryList art={art}/>
        </>

    );
}