export default function Stats() {
  return (
    <section className="py-24 bg-white">
      <div className="container px-8 mx-auto max-w-7xl flex flex-col items-center justify-center text-center">
        <div className="flex flex-col items-center justify-center p-8 bg-gray-50/50 rounded-3xl border border-gray-100 min-w-[300px]">
          <h3 className="text-gray-500 font-medium mb-2 uppercase tracking-wider text-sm">
            Años de experiencia
          </h3>
          <div className="flex items-center justify-center text-6xl md:text-7xl font-bold text-[#32373c]">
            <span className="text-primary">+</span>
            <span>10</span>
          </div>
        </div>
      </div>
    </section>
  );
}
