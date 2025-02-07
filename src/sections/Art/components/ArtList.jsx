import ArtListItem from './ArtListItem';

export default function ArtList(props) {
    const { arts } = props;
  
    return (
      <ul>
        {arts.map((art, index) => {
          return <ArtListItem key={index} art={art} />;
        })}
      </ul>
    );
  }