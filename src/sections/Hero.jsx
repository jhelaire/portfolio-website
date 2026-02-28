import Container from "../components/Container";
import profileImage from "../assets/headshot.jpeg";

export default function Hero() {
  return (
    <section id="top" className="py-16 sm:py-20">
      <Container>
        <div className="flex flex-col items-center gap-10 md:flex-row md:items-center">

          <div className="flex-1">
            <p className="text-white/70">Software Engineering Student</p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Jordan Helaire
            </h1>
            <p className="mt-4 max-w-2xl text-white/70">
              Software Engineering student at LSU with internship experience modernizing
              SOAP services to REST APIs, working with Azure databases, and developing
              full-stack applications in JavaScript and C#.
              Experienced collaborating with senior engineers to improve production systems.
            </p>

            <div className="mt-6 flex flex-wrap gap-3 text-sm text-white/60">
                <span>JavaScript</span>
                <span>TypeScript</span>
                <span>Python</span>
                <span>C#</span>
                <span>Azure</span>
                <span>SQL</span>
                <span>REST APIs</span>
              </div>
          </div>

          <div className="flex-1 flex justify-center">
            <img
              src={profileImage}
              alt="Jordan Helaire"
              className="w-80 h-80 object-cover rounded-2xl shadow-xl"
            />
          </div>


        </div>
      </Container>
    </section>
  );
}