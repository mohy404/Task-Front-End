import logo from '../assets/Logo.png'; 
import { MdDashboard, MdExpandMore, MdOutlineCategory ,  } from 'react-icons/md';
import { TbReportSearch } from 'react-icons/tb';
import { RiGroupLine } from 'react-icons/ri';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { IoSettingsOutline } from 'react-icons/io5';

const Sidebar: React.FC = () => {
    return (
        <div className="w-64 h-screen bg-white flex flex-col">
            {/* Logo */}
            <div className="p-2 mt-5">
                <img src={logo} alt="Acme Systems" className="h-12 mb-6 mx-auto" />
            </div>
            <div className='pl-5 text-stone-500 text-xs uppercase font-bold'>Menu</div>
            {/* Menu */}
            <nav className="flex-grow pl-2 pt-3">
                <ul>
                    {/* Active menu item */}
                    <li className="mb-2">
                        <a href="#" className="flex items-center gap-3 p-2 text-black bg-zinc-200 rounded-md mx-2">
                            <MdDashboard className="text-lg" />
                            SELECTED CATEGORY
                        </a>
                    </li>
                    {/* Other menu items */}

                    <li className="mb-2">
                        <a href="#" className="flex items-center gap-3 p-2 hover:text-blue-500 rounded-md mx-2">
                            <MdOutlineCategory className="text-lg" />
                            CATEGORRY
                        </a>
                    </li>

                    <li className="mb-2">
                        <a href="#" className="flex items-center gap-3 p-2 hover:text-blue-500 rounded-md mx-2">
                            <TbReportSearch className="text-lg" />
                            Reports
                        </a>
                    </li>
                    {/* Expanded menu item for Teams with subcategories */}
                    <li className="mb-2">
                        <a href="#" className="flex justify-between items-center gap-3 p-2 hover:text-blue-500 rounded-md mx-2">
                            <div className="flex items-center gap-3">
                                <RiGroupLine className="text-lg" />
                                Teams
                            </div>
                            <MdExpandMore className="text-lg" />
                        </a>
                        {/* Subcategory list */}
                        <ul className="ml-4 mt-2">
                        <li className="mb-2">
                                <a href="#" className="flex items-center gap-3 p-2 hover:text-blue-500 rounded-md mx-2">
                                SUBCATEGORY
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="flex items-center gap-3 bg-zinc-200 p-2 hover:text-blue-500 rounded-md mx-2">
                                SELECTED subcategory
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="flex items-center gap-3 p-2 hover:text-blue-500 rounded-md mx-2">
                                    Engineering
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="flex items-center gap-3 p-2 hover:text-blue-500 rounded-md mx-2">
                                    Marketing
                                </a>
                            </li>
                        </ul>
                    </li>
                    {/* ... Additional menu items */}
                    <li className="mb-2 mt-10">
                        <a href="#" className="flex items-center gap-3 p-2 hover:text-blue-500 rounded-md mx-2">
                            <IoIosNotificationsOutline className="text-lg" />
                            Notifications
                        </a>
                    </li>
                    <li className="mb-2">
                        <a href="#" className="flex items-center gap-3 p-2 hover:text-blue-500 rounded-md mx-2">
                            <IoSettingsOutline className="text-lg" />
                            Settings
                        </a>
                    </li>
                </ul>
            </nav>
            {/* Footer or additional content here */}
        </div>
    );
};

export default Sidebar;
