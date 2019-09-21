import React from 'react'
import './AboutPage.scss'
import Alex from '../../assets/staff-Alex.jpg'
import Eric from '../../assets/staff-Eric.jpg'
import Jeff from '../../assets/staff-Jeff.jpg'
import Jun from '../../assets/staff-Jun.jpg'
import Kevin from '../../assets/staff-Kevin.jpg'
import Mary from '../../assets/staff-Mary.jpg'

function AboutPage(props) {
    return <div className="AboutPage">
        <h2>Meet Your Advocates</h2>
        <div id="staff_overview">
            <p>With over 25 years of experience in the Chinese educational system, your Everest Placement Advocates are uniquely positioned to help you reach your full potential.Your placement team is comprised of professors, educators, cultural consultants, businessmen, and language experts. Here are a few you might meet:</p>
        </div>
        <div id="staff">
            <div className="staff_member">
                <img alt="a person's headshot" src={Alex} />
                <div className="staff_name">Alexander Green</div>
                <div className="staff_title">Placement Advocate</div>
                <p className="staff_description">Alexander was born and raised in Tucson, AZ. He earned his bachelor’s degree in East Asian Studies at Harvard and a master’s degree in History at Berkeley. He studied Chinese at Peking University and Tsinghua University. He has lived in China for the better part of ten years and has been teaching at Fudan University since 2007. He has taught middle school, high school, and college students in China. He has lived in Shanghai, Beijing, and Chengdu and has traveled extensively throughout China.</p>
            </div>
            <div className="staff_member">
                <img alt="a person's headshot" src={Kevin} />
                <div className="staff_name">Kevin Ho</div>
                <div className="staff_title">Placement Advocate</div>
                <p className="staff_description">Kevin was born and raised in Northern California. After graduating from UC Davis in 2000, Kevin began teaching English in both the US and China. He spent a year at Beijing University for Chinese language study, and in the following year, started his Masters program at Tsinghua University. He is an ESEC Certified teacher and SAT/TOEFL instructor. Before joining the Everest team, Kevin was a Director at Score! Educational Centers, the Head Business English Instructor at Sinopec Training Institute, and the Head teacher at UDA Education Consulting Group.</p>
            </div>
            <div className="staff_member">
                <img alt="a person's headshot" src={Jeff} />
                <div className="staff_name">Jeff Jolly</div>
                <div className="staff_title">Placement Advocate</div>
                <p className="staff_description">Jeff is a native of Los Angeles, California. He has obtained his Master's of Arts in English Rhetoric and Composition, Master’s of Science in TESOL, and his Bachelor’s of Arts in English Language & Linguistics. Jeff has over 20 years experience teaching students of all ages in China. His English teaching experience ranges from basic vocabulary to advanced business English. He is fluent in Mandarin Chinese and Japanese. His extensive travels in China, Taiwan, and Japan have helped him develop a cultural sensitivity to members of all social, economic, religious and ethnic enclaves.</p>
            </div> <div className="staff_member">
                <img alt="a person's headshot" src={Jun} />
                <div className="staff_name">Jun Hu</div>
                <div className="staff_title">Government Liaison</div>
                <p className="staff_description">Jun is a resident of Salt Lake City, Utah. Born and raised in China, Jun graduated from Tongji University where he majored in business management. He and his family have an extensive governmental educational background in China. Jun has established many significant relationships within the Chinese government and educational system. As an expert in teaching and recruiting overseas, he is uniquely qualified to identify the needs of China's most prominent schools.</p>
            </div> <div className="staff_member">
                <img alt="a person's headshot" src={Eric} />
                <div className="staff_name">Eric Hiller</div>
                <div className="staff_title">Outreach Coordinator</div>
                <p className="staff_description">Born and raised in Honolulu Hawaii, Eric has over 25 years experience in Workforce Planning, Recruiting, Screening, Interviewing, and On Boarding. The success of China's educational system relies heavily on having the right amount of teachers with the right competencies at the right time. Eric is focused on identifying qualified teachers in America that want to experience all the benefits of teaching in China.</p>
            </div> <div className="staff_member">
                <img alt="a person's headshot" src={Mary} />
                <div className="staff_name">Mary Zhang</div>
                <div className="staff_title">Office Manager</div>
                <p className="staff_description">Mary was born and raised in China. She graduated from Fudan University in Shanghai, China where she majored in English and earned her Bachelor's degree in Linguistics. Mary can speak and write fluently in English and Mandarin. Before joining Everest, she worked at the Corneil Training Center in Shanghai where she helped American teachers find jobs in China. Mary specializes in assisting American teachers with certifications, visas and all other documentation necessary for a successful transition to teaching in China.</p>
            </div>
        </div>
    </div>
}

export default AboutPage