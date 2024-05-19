import Navbar from "@/app/components/Navbar";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col bg-[#121212]">
            <Navbar />
            <div className="container mt-24 mx-auto px-12 py-4">
                <h1>
                    Why This Project?
                </h1>
                <p>
                    Ever faced the struggle of figuring out "what to do tonight"?  That's exactly why I built this app! I had this long-standing idea for a platform where users could easily share events, helping everyone discover things to do. When I stumbled upon a Next.js tutorial for building a similar app skeleton, it was the perfect starting point. I built upon that foundation, adding numerous features that balanced user needs with my own desire to explore technical aspects of development.
                </p>

                <h2>
                    Building the Project
                </h2>

                The project's technical core is based on a project from Javascript Mastery on YouTube. I then significantly expanded it by adding a variety of features myself.

                Here are some of the key features I implemented:

                <ul className="pl-5 list-disc flex flex-col gap-3">
                    <li>
                        <span className="font-semibold">Event Location Management: Effortlessly manage event locations with features like:</span>
                        <ul className="list-disc pl-5">
                            <li>Location search with autocomplete powered by Google Maps API.</li>
                            <li>Saving detailed venue information, including GPS coordinates.</li>
                        </ul>
                    </li>
                    <li>
                        Event Map View: Visualize all events on a user-friendly map interface.
                    </li>
                    <li>

                        <span>Dedicated User Roles:</span>
                        <ul>
                            <li>Artists: Access features specifically designed for artists to showcase their talents.</li>
                            <li>Event Organizers: Create, manage, and promote events, including the ability to post artist recruitment ads.</li>
                        </ul>
                    </li>
                    <li>Event Engagement:
                        <ul>
                            <li>Flash Events: Create time-sensitive events similar to Waze alerts.</li>
                            <li>User Posts with Photos: Allow users to share their experiences and add photos to events.</li>
                            <li>Event Saving: Let users keep track of interesting events for later.</li>
                        </ul>
                    </li>
                </ul>

                Challenges and Learnings
                This project pushed me in a number of ways:

                Responsive Design: I completely revamped the mobile navigation from the original project, opting for a bottom navigation bar that mimics the feel of popular social media apps. Tailwind's dimension thresholds made this process efficient.
                Map Integration and Interaction: Seamlessly integrating and interacting with the map was a key challenge.
                React Component Organization: Structuring and organizing React components effectively for maintainability.
                User Role-Based Access Control: Implementing robust access control based on user roles.
                By tackling these challenges, I significantly improved my development skills and brought this event discovery app to life!

            </div>

        </main >
    );
}
