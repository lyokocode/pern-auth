import { useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import moment from 'moment';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import "../styles/modal/calendar.scss"
import { AiOutlineClose } from 'react-icons/ai';
import { destroyModal } from '../utils/modal';


const Calendar = () => {

    const [dateRange, setDateRange] = useState({
        startDate: moment().startOf('month').toDate(),
        endDate: moment().endOf('month').toDate(),
        key: 'selection',
    });
    const handleDateRangeChange = (ranges) => {
        setDateRange(ranges.selection);
    };
    return (
        <div className='calendar'>
            <button className='closeBtn'
                onClick={destroyModal}
            >
                <AiOutlineClose size={24} />
            </button>
            <DateRangePicker
                ranges={[dateRange]}
                onChange={handleDateRangeChange}
            />
        </div>
    )
}

export default Calendar