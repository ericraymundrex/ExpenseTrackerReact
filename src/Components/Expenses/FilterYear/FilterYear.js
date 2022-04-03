import Card from "../../UI/Card";
import './FilterYear.css'
const FilterYear=(props)=>{
    const {selectedYear}=props;

    const yearSelectHandler=(event)=>{
        props.onYearChange(event.target.value);
    }
    return(
        <Card className="filter">
            <span>Select year</span>
            <select onChange={yearSelectHandler} value={selectedYear} className="select">
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
            </select>
        </Card>
    )
}

export default FilterYear;