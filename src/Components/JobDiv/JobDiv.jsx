import { BiTimeFive } from 'react-icons/bi';
import logo from "../../assets/react.svg"
import logo2 from "../../assets/pexels-realtoughcandycom-11035356.jpg"
import logo3 from "../../assets/pexels-markus-spiske-177598.jpg"
import logo4 from "../../assets/pexels-realtoughcandycom-11035356.jpg"
import logo5 from "../../assets/pexels-realtoughcandycom-11035356.jpg"
import logo6 from "../../assets/pexels-realtoughcandycom-11035356.jpg"
import logo7 from "../../assets/pexels-realtoughcandycom-11035356.jpg"
import logo8 from "../../assets/pexels-realtoughcandycom-11035356.jpg"
import logo9 from "../../assets/pexels-realtoughcandycom-11035356.jpg"
import logo10 from "../../assets/pexels-realtoughcandycom-11035356.jpg"

const data = [
    {
        "id": 1,
        "image": logo,
        "title": "Software Engineer",
        "time": "Full-time",
        "location": "San Francisco, CA",
        "description": "Develop and maintain software applications.",
        "company": "Tech Co"
    },
    {
        "id": 2,
        "image": logo2,
        "title": "Marketing Manager",
        "time": "Full-time",
        "location": "New York, NY",
        "description": "Plan and execute marketing strategies.",
        "company": "Marketing Solutions Inc"
    },
    {
        "id": 3,
        "image": logo3,
        "title": "Data Analyst",
        "time": "Part-time",
        "location": "Los Angeles, CA",
        "description": "Analyze and interpret data for business insights.",
        "company": "Data Analytics Corp"
    },
    {
        "id": 4,
        "image": logo4,
        "title": "UX/UI Designer",
        "time": "Full-time",
        "location": "Seattle, WA",
        "description": "Design intuitive and visually appealing user interfaces.",
        "company": "Design Innovators Ltd"
    },
    {
        "id": 5,
        "image": logo5,
        "title": "Accountant",
        "time": "Full-time",
        "location": "Chicago, IL",
        "description": "Handle financial accounts and reporting.",
        "company": "Financial Services Co"
    },
    {
        "id": 6,
        "image": logo6,
        "title": "Customer Support Representative",
        "time": "Part-time",
        "location": "Boston, MA",
        "description": "Assist customers with inquiries and issues.",
        "company": "Customer Support Solutions"
    },
    {
        "id": 7,
        "image": logo7,
        "title": "Graphic Designer",
        "time": "Full-time",
        "location": "Austin, TX",
        "description": "Create visual graphics for various projects.",
        "company": "Creative Designs Studio"
    },
    {
        "id": 8,
        "image": logo8,
        "title": "Project Manager",
        "time": "Full-time",
        "location": "Miami, FL",
        "description": "Oversee and manage project timelines and resources.",
        "company": "Project Management Experts"
    },
    {
        "id": 9,
        "image": logo9,
        "title": "Sales Representative",
        "time": "Full-time",
        "location": "Dallas, TX",
        "description": "Promote and sell products or services.",
        "company": "Sales Solutions Co"
    },
    {
        "id": 10,
        "image": logo10,
        "title": "Human Resources Manager",
        "time": "Full-time",
        "location": "Washington, D.C.",
        "description": "Manage HR functions and employee relations.",
        "company": "HR Management Services"
    }
]


const JobDiv = () => {

    return (
        <div className=''>
            <div className="jobContainer flex justify-center items-center gap-10 flex-wrap py-10">
                {
                    data.map(({ id, image, title, time, location, description, company }) => {
                        return (
                            <div key={id} className="group group/item singleJob w-[250px] p-[20px]  bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg">
                                <span className="flex justify-center items-center gap-4">
                                    <h2 className="text-[16px] font-semibold text-textColor group-hover:text-white">{title}</h2>
                                    <span className="flex items-center gap-1 text-[#ccc]">
                                        <BiTimeFive /> {time}
                                    </span>
                                </span>

                                <h6 className='text-[#ccc]'>{location}</h6>
                                <p className='text-[13px] pt-[20px] mt-[20px] text-[#959595] border-t-[2px] group-hover:text-white'>{description}</p>

                                <div className='company flex items-center gap-2'>
                                    <img className='w-[30px] h-[20px]' src={image} alt="" />
                                    <span className='text-[14px] py-[1rem] block group-hover:text-white'>{company}</span>
                                </div>

                                <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-textColor '>Apply Now</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default JobDiv;