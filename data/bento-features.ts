export interface BentoFeature {
  title: string;
  description: string;
  icon?: string; // Optional icon for each feature
  individualImageSrc?: string; // Image specific to this feature
}

export interface BentoFeaturesData {
  mainTitle: string;
  mainSubtitle: string;
  features: BentoFeature[];
}

export const bentoFeaturesData: BentoFeaturesData = {
  mainTitle: "Integración Sencilla",
  mainSubtitle: "Aurall se integra sin esfuerzo con tus sistemas existentes, potenciando tus operaciones sin interrupciones.",
  features: [
    {
      title: "Conexión Universal",
      description: "Compatible con una amplia gama de plataformas y tecnologías, asegurando una integración fluida.",
      icon: "/icons/universal-connection.svg", // Placeholder icon
      individualImageSrc: "/images/integrates-easily-1.png", // Placeholder image for this feature
    },
    {
      title: "API Flexible",
      description: "Nuestra API robusta y bien documentada permite una personalización y expansión ilimitadas.",
      icon: "/icons/api-flexible.svg", // Placeholder icon
      individualImageSrc: "/images/integrates-easily-2.png", // Placeholder image for this feature
    },
    {
      title: "Sincronización en Tiempo Real",
      description: "Mantén tus datos actualizados y consistentes en todos tus sistemas con sincronización instantánea.",
      icon: "/icons/realtime-sync.svg", // Placeholder icon
      individualImageSrc: "/images/integrates-easily-3.png", // Placeholder image for this feature
    },
    {
      title: "Soporte Dedicado",
      description: "Nuestro equipo de expertos te acompaña en cada paso de la integración, garantizando el éxito.",
      icon: "/icons/dedicated-support.svg", // Placeholder icon
      individualImageSrc: "/images/integrates-easily-4.png", // Placeholder image for this feature
    },
  ],
};
