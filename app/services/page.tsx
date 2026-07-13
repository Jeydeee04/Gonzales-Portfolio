import ServiceCard from "@/components/Service-Card";

const services = [
  { title: "Web Development", description: "Full-stack web apps using React, Next.js, and .NET." },
  { title: "Responsive Design", description: "Mobile-first interfaces that look great on any device." },
  { title: "API Development", description: "RESTful APIs and backend services with Node.js or .NET." },
  { title: "Deployment", description: "Docker containerization and cloud deployment." },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-black text-white noise-overlay">
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-12 animate-fade-in-up">
            <span className="font-bebas text-red-600 text-5xl text-hierarchy-high">04</span>
            <h2 className="font-bebas text-4xl text-white uppercase tracking-wider text-hierarchy-high">Services</h2>
            <span className="flex-1 h-[1px] bg-red-600/20" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service, i) => (
              <div key={service.title} className="animate-fade-in-up" style={{ animationDelay: `${i * 100}ms` }}>
                <ServiceCard title={service.title} description={service.description} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
