
import {BarChart, Bar, Cell, XAxis, LabelList, Tooltip, Legend, ResponsiveContainer} from 'recharts';


const CityChart = ({concerts}) => {

    const cityData = Object.values(concerts.reduce((acc, concert) => {

        const city = concert._embedded?.venues[0]?.city?.name;

        if(city){
            if(!acc[city]) {  acc[city] = {
                city: city,
                count: 0
            };
          }
        
            acc[city].count++;
        }

        return acc;

    }, {})
);

    const topCities = cityData.sort((a, b) => b.count - a.count).slice(0, 3);


    return (
        <div className='city-chart'> 
            <h3>📍 Top Concert Cities</h3>

            <ResponsiveContainer width="100%" height={250}>
                <BarChart data={topCities}>
                    <XAxis dataKey="city" type='category'/>
                    <Tooltip/>
                    <Bar dataKey="count" fill='#4A90E2'> 
                        <LabelList dataKey="count" position="top" />
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default CityChart;