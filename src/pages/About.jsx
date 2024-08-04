import { useAuth } from "../store/Auth"

export  const About = ()=>{
    const {data} = useAuth();

    return (
        <div className="container" style={{fontSize:'18px'}}>
            <br />
            <h1>About Us</h1> <br />
            {data ? <p>hii {data.username}</p>:'Welcome to the our website!'}
            
            <br />
            <h2>Welcome to MERNWEB</h2>
            <p>At MERNWEB, we are dedicated to [your mission or primary service]. Founded in 2024, our goal has always been to provide exceptional products/services that [describe the main benefit or unique selling proposition].
            </p>
            <h2>Our Story</h2>
            <br />
            <p>
            MERNWEB began with a simple idea: [briefly describe the inspiration or the problem you wanted to solve]. Since then, we have grown into a [describe your growth: small business, thriving company, etc.], thanks to our commitment to quality and customer satisfaction.
            <br />
            What We Do <br />
            We specialize in [brief description of your products or services]. Our team of [mention your team size or specialties] works tirelessly to ensure that every [product/service] meets our high standards of excellence. Whether you're looking for [list a few products/services], we have something for everyone.

            </p>
            <h2>Our Values</h2>
            <br />
            <p>
            Quality: We never compromise on the quality of our products/services.<br />
            Customer Satisfaction: Your happiness is our priority.<br />
            Innovation: We constantly strive to improve and innovate.<br />
            Sustainability: We are committed to sustainable practices in everything we do.<br />
            Meet the Team<br />
            Our team is comprised of dedicated professionals who are passionate about what they do. [Optionally, you can include brief bios of key team members with photos.]<br />

            </p>
            <br />
            <h2>Why Choose Us?</h2>
            <p>
            Experience: With [number] years in the industry, we know what it takes to deliver excellence.<br />
            Customer-Centric Approach: We listen to our customers and tailor our offerings to meet their needs.<br />
            Reliable Support: Our support team is always here to help you with any questions or issues.<br />
            </p>
            <h2>Contact Us</h2>
            Have any questions or need assistance? Feel free to reach out to us at:
            <br />
            <li>Email: <input type="text" placeholder="enter your email"/></li>
            <li>Phone: <input type="text" placeholder="enter your phone"/></li>
            <li>Address: <input type="text" placeholder="enter your address" /></li>


            Or visit our Contact Page for more details.
            <br /><br />
            Thank you for choosing MERNWEB. We look forward to serving you!


        </div>
    )

}