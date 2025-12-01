const features = [
  {
    title: "Comunicación cálida",
    description: "Presenta un saludo cercano para iniciar cualquier conversación digital con energía positiva."
  },
  {
    title: "Listo para escalar",
    description: "Construido con Next.js y React, fácil de desplegar en Vercel y extender con nuevas secciones."
  },
  {
    title: "Diseño adaptable",
    description: "Una tarjeta elegante que funciona en dispositivos móviles y escritorio con estilo moderno."
  }
];

export default function HomePage() {
  return (
    <main>
      <section className="card">
        <h1 className="title">¡Hola!</h1>
        <p className="subtitle">
          Bienvenido a un punto de partida vibrante para tus ideas. Este espacio celebra un simple saludo que abre puertas a
          nuevas conexiones.
        </p>

        <a className="cta" href="https://vercel.com/dashboard" target="_blank" rel="noreferrer">
          Despliega tu mensaje
        </a>

        <div className="features">
          {features.map((feature) => (
            <article key={feature.title} className="feature">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
