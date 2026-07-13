# Portfolio

Sitio de portfolio personal generado con [Hugo](https://gohugo.io/), publicado en GitHub Pages.
Ver `idea.md` y `.specify/memory/constitution.md` para el contexto y las reglas del proyecto.

## Requisitos

- [Hugo **extended**](https://github.com/gohugoio/hugo/releases) (no la versión normal — la
  constitución del proyecto lo exige por el soporte de SCSS/Sass).
- Git.
- No hace falta Node/npm: el proyecto lo evita a propósito.

### Instalación de Hugo (Windows)

```powershell
winget install Hugo.Hugo.Extended
```

Alternativas: `choco install hugo-extended`, o descargar el binario `_extended_` desde las
[releases oficiales](https://github.com/gohugoio/hugo/releases).

Verificar instalación:

```powershell
hugo version
```

Debe incluir la palabra `extended` en la salida.

## Uso

### Levantar el sitio en local

```powershell
hugo server -D
```

Abre el sitio en `http://localhost:1313` con recarga automática al guardar cambios. `-D` incluye
contenido marcado como borrador (`draft: true`).

### Generar el build de producción

```powershell
hugo
```

Genera el sitio estático en `public/` (esta carpeta no se versiona/edita a mano).

### Agregar contenido nuevo

Regla de oro del proyecto: **una entrada nueva = un solo archivo Markdown**, sin tocar layouts ni
índices a mano.

**Nuevo proyecto:**

```powershell
hugo new content/projects/nombre-del-proyecto.md
```

**Nueva skill:**

```powershell
hugo new content/skills/nombre-skill.md
```

Esto crea el archivo a partir del archetype correspondiente (`archetypes/projects.md` /
`archetypes/skills.md`) con el front matter base ya cargado. Completá los campos y el contenido,
guardá, y listo — Hugo lo detecta solo.

### Publicar

El deploy es automático vía GitHub Actions (`.github/workflows/hugo.yaml`): cada push a la rama
principal buildea el sitio y lo publica en GitHub Pages con `actions/deploy-pages`. No hace falta
correr `hugo` a mano ni pushear la carpeta `public/`.

## Estructura del proyecto

```
content/       Contenido del sitio (Markdown). Esto es lo que editás día a día.
  projects/    Un archivo por proyecto del portfolio.
  skills/      Un archivo por skill/tecnología.
layouts/       Templates HTML/Go que definen cómo se renderiza el contenido.
static/        Assets que se copian tal cual (imágenes, etc.).
archetypes/    Plantillas usadas por `hugo new` para cada tipo de contenido.
hugo.yaml      Configuración del sitio (título, perfil, params).
public/        Output generado por `hugo` (no editar, no versionar a mano).
specs/         Especificaciones del proyecto (spec-driven development, ver CLAUDE.md).
```
