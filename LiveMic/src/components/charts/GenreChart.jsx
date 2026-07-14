
import {PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer} from 'recharts';



const GenreChart = ({ concerts }) => {

    const genreData = Object.values(concerts.reduce((acc, concert) => {

        const genre = concert.classifications?.[0]?.genre?.name;

        if(
            genre && 
            ! ["other", "undefined"].includes(genre.toLowerCase())
        )  {
            if(!acc[genre]) {
                acc[genre] = {
                    name: genre,
                    count: 0 
                };
            }
            acc[genre].count++; 
        }
        return acc;

    }, {})
);

        const topGenres = genreData.sort((a, b) => b.count - a.count).slice(0, 5);

       

        const COLORS = [
        "#0095ff", 
        "#4A90E2", 
        "#77BDF6", 
        "#8FD3FF",
        "#2D64DB",
    ];



    return (
        <div className='genre-chart'>
            <h3>🎵 Top 5 Genres</h3>
            <ResponsiveContainer width="100%" height={300}>
                <PieChart>


                    <Pie 
                        data={topGenres}
                        dataKey="count"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                    >    
                        {topGenres.map((entry, index) => (
                            <Cell 
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                            />
                        ))}
                    </Pie>
                    <Tooltip />
                    <Legend wrapperStyle={{paddingTop: "20px"}}/>
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default GenreChart;