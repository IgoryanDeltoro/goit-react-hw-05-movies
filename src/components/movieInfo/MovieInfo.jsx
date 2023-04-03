import {
  DetailsBox,
  Image,
  ImageBox,
  TD,
  Td,
  TitleInfo,
} from './MovieInfo.styled';

const IMAGE_ENDPOINT = 'https://image.tmdb.org/t/p/w500';

const MovieInfo = ({
  pending,
  details: {
    original_title,
    vote_average,
    vote_count,
    genres,
    budget,
    release_date,
    overview,
    poster_path,
  },
}) => {
  const fixedNum = vote_average && Number(vote_average.toFixed(1));
  return (
    <DetailsBox>
      <div>
        <TitleInfo>{original_title}</TitleInfo>
        <table>
          <tbody>
            <tr>
              <Td>
                <h2>Rating:</h2>
              </Td>
              <TD>
                IMDb: {fixedNum}({vote_count})
              </TD>
            </tr>
            <tr>
              <Td>
                <h2>Genres:</h2>
              </Td>
              <TD>
                {pending &&
                  genres.map(({ name }, idx, arr) => {
                    return idx < arr.length - 1 ? name + ', ' : name;
                  })}
              </TD>
            </tr>
            <tr>
              <Td>
                <h2>Budget:</h2>
              </Td>
              <TD>
                <span>{budget}</span>
              </TD>
            </tr>
            <tr>
              <Td>
                <h2>Release date:</h2>
              </Td>
              <TD>{release_date}</TD>
            </tr>
            <tr>
              <Td>
                <h2>Overview:</h2>
              </Td>
              <TD>
                <p>{overview}</p>
              </TD>
            </tr>
          </tbody>
        </table>
      </div>
      <ImageBox>
        {pending && (
          <Image src={IMAGE_ENDPOINT + poster_path} alt="poster_image" />
        )}
      </ImageBox>
    </DetailsBox>
  );
};
export default MovieInfo;
