/**
 * Script para controlar el modal de información de los autos
 */
document.addEventListener('DOMContentLoaded', function() {
    // Datos detallados de los autos
    const carData = {
        // Toyota
        corolla: {
            title: "Toyota Corolla 2025",
            price: "$22,500",
            image: "../img/toyotaCorolla.jpg",
            description: "El Toyota Corolla 2025 combina elegancia, eficiencia y tecnología en un sedán compacto. Con su diseño aerodinámico y su motor eficiente, ofrece una experiencia de conducción suave y económica, ideal para uso diario en ciudad y carretera.",
            specs: [
                "Motor: 1.8L 4 cilindros con 139HP",
                "Transmisión: CVT automática",
                "Rendimiento: 31 ciudad / 40 carretera (MPG)",
                "Tracción: Delantera (FWD)",
                "Capacidad: 5 pasajeros"
            ],
            features: [
                "Sistema de infoentretenimiento con pantalla táctil de 8\"",
                "Android Auto y Apple CarPlay inalámbricos",
                "Sistema de seguridad Toyota Safety Sense 3.0",
                "Cámara de reversa con guías dinámicas",
                "Control de clima automático dual"
            ]
        },
        supra: {
            title: "Toyota Supra 2025",
            price: "$56,500",
            image: "../img/toyotaSupra.jpg",
            description: "El legendario Toyota Supra regresa en su versión 2025 con mejoras en potencia y manejo. Este deportivo de alto rendimiento combina la ingeniería japonesa con la pasión por la velocidad, ofreciendo una experiencia de conducción emocionante y un diseño que atrae todas las miradas.",
            specs: [
                "Motor: 3.0L 6 cilindros turbo con 382HP",
                "Transmisión: Automática de 8 velocidades",
                "Aceleración: 0-60 mph en 3.9 segundos",
                "Tracción: Trasera (RWD)",
                "Suspensión: Adaptativa con modo Sport+"
            ],
            features: [
                "Asientos deportivos de cuero con ajuste eléctrico",
                "Sistema de sonido premium JBL con 12 altavoces",
                "Modo de conducción deportiva con launch control",
                "Head-up display a color",
                "Sistema de escape deportivo con sonido amplificado"
            ]
        },
        hilux: {
            title: "Toyota Hilux 2025",
            price: "$34,800",
            image: "../img/toyotaHilux.jpg",
            description: "La Toyota Hilux 2025 redefine la robustez y versatilidad en una pickup. Diseñada para enfrentar los terrenos más difíciles mientras ofrece confort y tecnología, es perfecta tanto para trabajo pesado como para aventuras familiares de fin de semana.",
            specs: [
                "Motor: 2.8L Turbodiésel con 201HP y 500Nm de torque",
                "Transmisión: Automática de 6 velocidades",
                "Capacidad de remolque: 3,500 kg",
                "Tracción: 4x4 con bloqueo de diferencial",
                "Capacidad de carga: 1,000 kg"
            ],
            features: [
                "Sistema de conducción todo terreno con modos seleccionables",
                "Cámara 360° para visualización en terrenos difíciles",
                "Conectividad smartphone con pantalla táctil de 9\"",
                "Asistente de descenso en pendientes",
                "Sistema de alerta de cruce trasero"
            ]
        },
        camry: {
            title: "Toyota Camry 2025",
            price: "$26,800",
            image: "../img/toyotaCamry.jpeg",
            description: "El Toyota Camry 2025 eleva el concepto de sedán de lujo con un diseño sofisticado y una cabina llena de tecnología. Ofrece una combinación perfecta de confort, potencia y eficiencia para quienes buscan una experiencia premium en un vehículo de uso diario.",
            specs: [
                "Motor: 2.5L 4 cilindros con 203HP",
                "Versión híbrida disponible: 208HP combinados",
                "Transmisión: Automática de 8 velocidades",
                "Tracción: Delantera con control de estabilidad avanzado",
                "Consumo: 28 ciudad / 39 carretera (MPG)"
            ],
            features: [
                "Interior con acabados de madera y aluminio cepillado",
                "Asientos de cuero ventilados y calefactados",
                "Sistema de sonido JBL con 9 altavoces",
                "Techo panorámico eléctrico",
                "Cargador inalámbrico para smartphone"
            ]
        },
        rav4: {
            title: "Toyota RAV4 2025",
            price: "$29,300",
            image: "../img/toyotaRav4.jpg",
            description: "El Toyota RAV4 2025 es un SUV versátil diseñado para familias activas. Combina espacio, eficiencia y capacidades todoterreno moderadas en un paquete atractivo y moderno. Su interior espacioso y configuración flexible lo hacen ideal tanto para la vida urbana como para escapadas de fin de semana.",
            specs: [
                "Motor: 2.5L 4 cilindros con 203HP",
                "Versión híbrida: 219HP con tracción eléctrica AWD",
                "Transmisión: Automática de 8 velocidades",
                "Capacidad de remolque: hasta 1,500 kg",
                "Espacio de carga: 1,059 litros (asientos traseros plegados)"
            ],
            features: [
                "Sistema de tracción dinámica en todas las ruedas",
                "Modos de conducción seleccionables (Eco, Normal, Sport)",
                "Portón trasero eléctrico con sensor de pie",
                "Sistema de audio premium con 11 altavoces",
                "Asistente de conducción Toyota Safety Sense 2.5+"
            ]
        },

        // Ford
        mustang: {
            title: "Ford Mustang 2025",
            price: "$35,900",
            image: "../img/fordMustang.png",
            description: "El Ford Mustang 2025 continúa el legado del muscle car americano por excelencia. Con un diseño agresivo y motores potentes, ofrece emociones fuertes en cada aceleración mientras incorpora tecnología moderna y opciones de personalización para los verdaderos entusiastas de la conducción.",
            specs: [
                "Motor: 5.0L V8 con 460HP (GT)",
                "Opción EcoBoost: 2.3L Turbo con 310HP",
                "Transmisión: Manual de 6 velocidades o automática de 10",
                "Aceleración: 0-60 mph en 4.2 segundos (GT)",
                "Tracción: Trasera con diferencial de deslizamiento limitado"
            ],
            features: [
                "Modos de conducción personalizables con Launch Control",
                "Sistema de escape activo con control de sonido",
                "Pantalla digital de 12.4 pulgadas personalizable",
                "Sistema SYNC 4 con pantalla táctil de 13.2 pulgadas",
                "Paquete de rendimiento con llantas y frenos Brembo"
            ]
        },
        explorer: {
            title: "Ford Explorer 2025",
            price: "$33,400",
            image: "../img/fordExplorer.jpg",
            description: "El Ford Explorer 2025 es un SUV de tres filas diseñado para familias aventureras. Con espacio para 7 pasajeros y capacidades todoterreno, ofrece versatilidad, confort y tecnología para viajes largos o el ajetreo diario de la vida familiar moderna.",
            specs: [
                "Motor: 2.3L EcoBoost con 300HP",
                "Opción Híbrida disponible: 318HP combinados",
                "Transmisión: Automática de 10 velocidades",
                "Tracción: Trasera o 4x4 inteligente",
                "Capacidad de remolque: hasta 2,540 kg"
            ],
            features: [
                "Sistema de entretenimiento trasero con pantallas duales",
                "Asientos con masaje en primera fila",
                "Conectividad WiFi 4G para hasta 10 dispositivos",
                "Sistema de sonido B&O con 14 altavoces",
                "Asistente de aparcamiento automático"
            ]
        },
        lobo: {
            title: "Ford Lobo 2025",
            price: "$38,700",
            image: "../img/fordLobo.jpg",
            description: "La Ford Lobo (F-150) 2025 reafirma su posición como la pickup más vendida, combinando capacidad de trabajo, lujo y tecnología avanzada. Su construcción con aleación de aluminio de alta resistencia la hace más ligera y eficiente sin sacrificar durabilidad y potencia.",
            specs: [
                "Motor: 3.5L EcoBoost V6 con 400HP",
                "Opción PowerBoost Híbrido: 430HP combinados",
                "Transmisión: Automática de 10 velocidades",
                "Capacidad de remolque: hasta 6,350 kg",
                "Capacidad de carga: 1,500 kg"
            ],
            features: [
                "Generador Pro Power Onboard de 7.2 kW",
                "Interior Work Surface para uso como oficina móvil",
                "Asientos reclinables Max Recline para descanso",
                "Sistema de asistencia para remolque Pro Trailer Backup Assist",
                "Pantalla táctil vertical de 12 pulgadas"
            ]
        },
        shelby: {
            title: "Ford Shelby 2025",
            price: "$72,900",
            image: "../img/fordShelby.jpg",
            description: "El Ford Mustang Shelby GT500 2025 representa la máxima expresión de potencia en la gama Mustang. Este muscle car de edición limitada ofrece prestaciones dignas de superdeportivos con un rugido americano inconfundible y tecnología de carreras adaptada a la calle.",
            specs: [
                "Motor: 5.2L V8 Supercargado con 760HP",
                "Transmisión: Automática DCT de 7 velocidades",
                "Aceleración: 0-60 mph en 3.3 segundos",
                "Velocidad máxima: 180 mph (limitada electrónicamente)",
                "Frenos: Brembo de 6 pistones con discos de 420mm"
            ],
            features: [
                "Modo de pista con ajustes de suspensión, dirección y respuesta",
                "Aerodinámica activa con splitter delantero y alerón trasero",
                "Interior con acabados en fibra de carbono y Alcantara",
                "Sistema de escape activo con cuatro modos de sonido",
                "Llantas de fibra de carbono con neumáticos Michelin Pilot Sport Cup 2"
            ]
        },
        raptor: {
            title: "Ford Raptor 2025",
            price: "$65,400",
            image: "../img/fordRaptor.jpg",
            description: "La Ford Raptor 2025 es una pickup de alto rendimiento diseñada para dominar cualquier terreno a alta velocidad. Inspirada en los vehículos de carreras del desierto, combina capacidades todoterreno extremas con el confort y tecnología de un vehículo premium.",
            specs: [
                "Motor: 3.5L EcoBoost V6 con 450HP y 691Nm",
                "Transmisión: Automática de 10 velocidades con modos todoterreno",
                "Suspensión: FOX Racing con tecnología Live Valve",
                "Neumáticos: BFGoodrich All-Terrain T/A KO2 de 35 pulgadas",
                "Distancia al suelo: 30 cm"
            ],
            features: [
                "Modo Baja para conducción a alta velocidad en terrenos difíciles",
                "Control de terreno con 7 modos seleccionables",
                "Cámaras 360° con vista de sendero frontal",
                "Diferencial trasero de bloqueo electrónico",
                "Sistema de escape deportivo de doble salida"
            ]
        },

        // Nissan
        sentra: {
            title: "Nissan Sentra 2025",
            price: "$24,300",
            image: "../img/nissanSentra.jpg",
            description: "El Nissan Sentra 2025 eleva el estándar de los sedanes compactos con un diseño deportivo y un equipamiento premium. Ofrece tecnología avanzada y eficiencia en el consumo sin sacrificar el estilo ni el confort para la conducción diaria.",
            specs: [
                "Motor: 2.0L 4 cilindros con 149HP",
                "Transmisión: CVT Xtronic con modo manual",
                "Consumo: 29 ciudad / 39 carretera (MPG)",
                "Suspensión: Independiente en las 4 ruedas",
                "Peso: 1,380 kg"
            ],
            features: [
                "Sistema de información y entretenimiento con pantalla de 8 pulgadas",
                "Integración inalámbrica con Apple CarPlay y Android Auto",
                "Sistema de sonido Bose Premium con 8 altavoces",
                "Asientos delanteros con calefacción y refrigeración",
                "Sistema de asistencia al conductor Nissan Safety Shield 360"
            ]
        },
        kicks: {
            title: "Nissan Kicks 2025",
            price: "$27,900",
            image: "../img/nissanKicks.jpg",
            description: "El Nissan Kicks 2025 es un crossover compacto que combina eficiencia, estilo urbano y tecnología accesible. Perfecto para la ciudad, ofrece una posición elevada de conducción, gran eficiencia de combustible y un espacio interior sorprendentemente amplio en un formato compacto.",
            specs: [
                "Motor: 1.6L 4 cilindros con 122HP",
                "Transmisión: CVT Xtronic",
                "Consumo: 31 ciudad / 36 carretera (MPG)",
                "Tracción: Delantera con Control Dinámico del Vehículo",
                "Espacio de carga: 716 litros con asientos abatidos"
            ],
            features: [
                "Sistema de audio Bose PersonalSpace con altavoces en reposacabezas",
                "Techo bicolor personalizable",
                "Monitor de visión periférica Intelligent Around View",
                "Alerta de tráfico cruzado trasero",
                "Cargador inalámbrico para smartphone"
            ]
        },
        versa: {
            title: "Nissan Versa 2025",
            price: "$31,500",
            image: "../img/nissanVersa.jpeg",
            description: "El Nissan Versa 2025 combina eficiencia, espacio y tecnología en un sedán subcompacto. Con un diseño moderno y aerodinámico, ofrece una excelente economía de combustible y un sorprendente nivel de equipamiento en su segmento, ideal para conductores urbanos que buscan valor.",
            specs: [
                "Motor: 1.6L 4 cilindros con 122HP",
                "Transmisión: Manual de 5 velocidades o CVT Xtronic",
                "Consumo: 32 ciudad / 40 carretera (MPG)",
                "Tracción: Delantera con control de estabilidad",
                "Tanque de combustible: 41 litros"
            ],
            features: [
                "Sistema de frenado automático de emergencia con detección de peatones",
                "Monitor de punto ciego",
                "Sistema de información y entretenimiento con pantalla táctil de 7\"",
                "Entrada sin llave con botón de encendido",
                "Sistema de audio con 6 altavoces"
            ]
        },
        z: {
            title: "Nissan Z 2025",
            price: "$42,800",
            image: "../img/nissanZ.jpg",
            description: "El Nissan Z 2025 rinde homenaje a su legado deportivo con un diseño retro-futurista que combina líneas clásicas con tecnología moderna. Este coupé deportivo ofrece emociones puras al volante con un potente motor V6 turboalimentado y una excelente dinámica de conducción.",
            specs: [
                "Motor: 3.0L V6 Twin-Turbo con 400HP",
                "Transmisión: Manual de 6 velocidades o automática de 9",
                "Aceleración: 0-60 mph en 4.3 segundos",
                "Tracción: Trasera con diferencial de deslizamiento limitado",
                "Relación peso/potencia: 3.6 kg/HP"
            ],
            features: [
                "Launch Control para aceleración óptima",
                "Instrumentación digital personalizable de 12.3 pulgadas",
                "Asientos deportivos con refuerzos laterales ajustables",
                "Sistema de escape con control activo de sonido",
                "Frenos deportivos con pinzas de 4 pistones"
            ]
        },
        gtr: {
            title: "Nissan GTR 2025",
            price: "$115,000",
            image: "../img/nissanGTR.jpg",
            description: "El legendario Nissan GT-R 2025 continúa siendo un superdeportivo que desafía las leyes de la física. Conocido como 'Godzilla', combina una potencia brutal con un sistema de tracción integral avanzado y tecnología derivada de competición para ofrecer prestaciones extraordinarias en cualquier condición.",
            specs: [
                "Motor: 3.8L V6 Twin-Turbo con 565HP",
                "Versión NISMO: 600HP y 652Nm",
                "Transmisión: Automática de doble embrague de 6 velocidades",
                "Aceleración: 0-60 mph en 2.9 segundos",
                "Sistema ATTESA E-TS AWD con vector de par"
            ],
            features: [
                "Carrocería reforzada con fibra de carbono",
                "Sistema de suspensión Bilstein DampTronic ajustable",
                "Frenos Brembo de compuesto de carbono-cerámica",
                "Sistema de telemetría con datos en tiempo real",
                "Interior hecho a mano con acabados en fibra de carbono y Alcantara"
            ]
        }
    };

    // Elementos del DOM
    const modal = document.getElementById('carModal');
    const closeBtn = document.querySelector('.close-modal');
    const contactBtn = document.querySelector('.contact-btn');
    const allInfoBtns = document.querySelectorAll('.info-btn');
    
    // Elementos del modal
    const modalTitle = document.getElementById('modal-car-title');
    const modalImage = document.getElementById('modal-car-image');
    const modalPrice = document.getElementById('modal-car-price');
    const modalSpecs = document.getElementById('modal-car-specs');
    const modalDescription = document.getElementById('modal-car-description');
    const modalFeatures = document.getElementById('modal-car-features');
    
    // Abrir modal al hacer clic en "Más información"
    allInfoBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Obtener el ID del auto desde el atributo data-car-id del contenedor padre
            const carCard = this.closest('.car-card');
            const carId = carCard.getAttribute('data-car-id');
            
            // Cargar datos del auto en el modal
            if (carData[carId]) {
                const car = carData[carId];
                
                // Actualizar elementos del modal
                modalTitle.textContent = car.title;
                modalImage.src = car.image;
                modalImage.alt = car.title;
                modalPrice.textContent = 'Precio: ' + car.price;
                modalDescription.textContent = car.description;
                
                // Limpiar y cargar especificaciones
                modalSpecs.innerHTML = '';
                car.specs.forEach(spec => {
                    const li = document.createElement('li');
                    li.textContent = spec;
                    modalSpecs.appendChild(li);
                });
                
                // Limpiar y cargar características
                modalFeatures.innerHTML = '';
                car.features.forEach(feature => {
                    const li = document.createElement('li');
                    li.textContent = feature;
                    modalFeatures.appendChild(li);
                });
                
                // Mostrar modal con animación
                modal.style.display = 'block';
                setTimeout(() => {
                    modal.classList.add('show');
                }, 10);
                
                // Prevenir scroll del body
                document.body.style.overflow = 'hidden';
            }
        });
    });
    
    // Cerrar modal con el botón X
    closeBtn.addEventListener('click', closeModal);
    
    // Cerrar modal haciendo clic fuera del contenido
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });
    
    // Botón de contacto en el modal
    contactBtn.addEventListener('click', function() {
        window.location.href = 'contacto.html';
    });
    
    // Función para cerrar el modal
    function closeModal() {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = 'none';
            // Restaurar scroll
            document.body.style.overflow = 'auto';
        }, 300);
    }
    
    // Cerrar modal con tecla ESC
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }
    });
}); 