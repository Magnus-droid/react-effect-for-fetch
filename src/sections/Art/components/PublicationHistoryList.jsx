export function PublicationHistoryList(props) {

    console.log(props)
    const history = props.art.publicationHistory;
    console.log(history);

    return (
        <>
            <h4>Publication History:</h4>
            <ul>
                {history.map((publication, index) => {
                    return (
                        <li key={index}>
                            {publication}
                        </li>
                    );
                })}
            </ul>
        </>
    );
}
