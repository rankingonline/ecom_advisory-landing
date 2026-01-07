# Ecom Advisory Landing Page

Este proyecto contiene el código fuente para la landing page de Ecom Advisory.

## Estructura de Directorios

- `assets/`: Contiene imágenes, fuentes y otros archivos estáticos.
- `screen/`: Contiene las vistas de la aplicación.
  - `home/`: Contiene los archivos específicos de la página de inicio (HTML, CSS, JS).

## Sistema de Diseño

A continuación se definen los estilos base para mantener la consistencia visual del proyecto.

### Paleta de Colores

| Color | Hex | Uso Sugerido |
| :--- | :--- | :--- |
| **Primary** | `#03045e` | Color principal de marca, encabezados, botones sólidos |
| **Secondary** | `#0a49b0` | Color secundario, estados hover, sub-secciones |
| **Tertiary (Accent)**| `#62bfdd` | Acentos, detalles visuales, iconos, enlaces |
| **Dark** | `#3c3c3c` | Texto principal, párrafos, elementos oscuros |
| **Light Background**| `#f8f9fc` | Fondo general de la página (Complementario) |
| **White** | `#ffffff` | Fondo de tarjetas, contenedores, texto sobre oscuro |
| **Degradado** | `linear-gradient(135deg, #03045e 0%, #0a49b0 100%)` | Fondos hero, botones con énfasis |

### Tipografía

Se utilizan fuentes de Google Fonts.

*   **Principal (Cuerpo)**: `Inter`
    *   Uso: Párrafos, menús, inputs, texto de interfaz.
    *   Pesos: 400 (Regular), 500 (Medium).
*   **Secundaria (Títulos)**: `Montserrat`
    *   Uso: Encabezados (H1-H6), CTAs grandes, destacados.
    *   Pesos: 600 (SemiBold), 700 (Bold).

### Estilo Visual y Concepto

El diseño debe reflejar un enfoque **tecnológico, profesional y orientado al crecimiento**.

*   **Conceptos de Marca**: La identidad visual debe comunicar claramente los pilares de **E-commerce, Asesoramiento y Crecimiento Empresarial**.
*   **Interfaz (UI)**:
    *   **Esquinas Redondeadas**: Uso consistente de bordes redondeados (soft rounded corners) en tarjetas, botones y contenedores para evocar modernidad y accesibilidad.
    *   **Uso de Degradados**: El degradado principal es un elemento identitario clave. Debe usarse en fondos de secciones importantes (Hero), botones principales y elementos gráficos para aportar dinamismo.
    *   **Glassmorphism**: Uso de efectos de vidrio esmerilado (transparencia + blur) para detalles sutiles, tarjetas sobre fondos complejos o barras de navegación, añadiendo profundidad y un toque premium.
    *   **Estética Tecnológica**: Diseño limpio, uso amplio del espacio en blanco (whitespace) y composiciones que inspiren solidez y vanguardia.

### Responsividad (Prioridad Máxima)

La adaptación a diferentes dispositivos no es opcional, es **crítica**. El sitio debe verse y funcionar impecablemente en cualquier resolución.

*   **Mobile First**: Todo componente debe pensarse primero para pantallas pequeñas y escalar progresivamente a escritorio.
*   **Fluidez Total**: Los layouts deben adaptarse suavemente entre breakpoints. Evitar anchos fijos que rompan la estructura en pantallas intermedias (tablets).
*   **Experiencia Táctil**: Elementos interactivos (botones, enlaces) deben tener áreas de toque amplias y amigables para pulgares en móvil.
*   **Cero Scroll Horizontal**: Bajo ninguna circunstancia debe existir scroll horizontal en la vista principal (body).

## Cómo empezar

1.  Navega a la carpeta `screen/home/`.
2.  Abre el archivo `index.html` en tu navegador web.

## Tecnologías

- HTML5
- CSS3
- JavaScript (Vanilla)
