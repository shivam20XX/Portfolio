function Statistics() {
  const stats = [
    {
      number: "3+",
      label: "Projects Completed",
      icon: "📊",
      delay: "0s",
    },
    {
      number: "500K+",
      label: "Records Analyzed",
      icon: "📈",
      delay: "0.1s",
    },
    {
      number: "87%",
      label: "Model Accuracy",
      icon: "🎯",
      delay: "0.2s",
    },
    {
      number: "25%",
      label: "Revenue Growth",
      icon: "💡",
      delay: "0.3s",
    },
  ];

  return (
    <section className="py-24 px-[12vw] md:px-[20vw] font-sans relative">
      <div className="text-center mb-16 animate-fadeInUp">
        <h2 className="text-4xl font-bold text-pink-400 mb-2">By The Numbers</h2>
        <p className="text-gray-400">Achievements and impact metrics</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="glass-effect rounded-xl p-8 border-pink-600/30 text-center hover-lift transition-smooth group animate-fadeInUp"
            style={{
              animationDelay: stat.delay,
            }}
          >
            <div className="text-5xl mb-4">{stat.icon}</div>
            <div className="text-3xl font-bold text-pink-400 mb-2 group-hover:text-pink-300 transition-colors">
              {stat.number}
            </div>
            <div className="text-gray-400 group-hover:text-gray-300 transition-colors">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Statistics;
