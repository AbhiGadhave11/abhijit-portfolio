import Section from "./Section";

const stats = [
    { label: "Years Experience", value: "2+" },
    { label: "Projects Completed", value: "10+" },
    { label: "Awards Won", value: "1" },
];


export default function Stats() {
    return (
        <Section id="stats" title="Stats">
            <div className="grid md:grid-cols-3 gap-8 text-center">
                {stats.map((stat, i) => (
                <div key={i}
                className="p-6 border rounded-lg shadow hover:shadow-md transition">
                    <h3 className="text-4xl font-bold text-blue-600">{stat.value}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{stat.label}</p>
                </div>
                ))}
            </div>
        </Section>
    );
}