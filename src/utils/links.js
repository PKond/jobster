import { IoBarChartSharp } from 'react-icons/io5';
import { MdQueryStats } from 'react-icons/md';
import { FaWpforms } from 'react-icons/fa';
import { ImProfile } from 'react-icons/im';

const links = [
	{id: 1, text: 'stats', icon: <IoBarChartSharp />, path: '/'},
	{id: 2, text: 'all jobs', icon: <MdQueryStats />, path: '/all-jobs'},
	{id: 3, text: 'add job', icon: <FaWpforms />, path: '/add-job'},
	{id: 4, text: 'profile', icon: <ImProfile />, path: '/profile'}
]

export default links;