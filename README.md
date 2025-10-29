# Frontend Plantas — Instrucciones de desarrollo

Este proyecto es una SPA React + Vite + TypeScript que consume el backend desplegado en https://backendplantas.onrender.com/api.

Pasos básicos

1. Instalar dependencias:

```powershell
cd "C:\Users\User\Desktop\Proyecto primos\solecito\frontend-plantas"
npm install
```

2. Configurar variables de entorno (opcional):

- Copia el ejemplo:

```powershell
copy .env.example .env
```

- Si quieres apuntar a otro backend en desarrollo, edita `.env` y cambia `VITE_API_URL`.

3. Ejecutar en modo desarrollo (con hot-reload):

```powershell
npm run dev -- --host --port 5173
```

Luego abre en tu navegador: http://localhost:5173/

4. Build de producción y previsualización local:

```powershell
npm run build
npx vite preview --port 5173 --host
```

5. Tests:

```powershell
npm run test
```

Notas y solución de problemas

- Si ves errores de TypeScript en VS Code después de que `npx tsc --noEmit` pase, reinicia el TS server en VS Code: Ctrl+Shift+P -> "TypeScript: Restart TS Server" y luego "Developer: Reload Window".
- Si las peticiones al backend fallan, revisa la variable `VITE_API_URL` en `.env` (debe incluir `/api` si tu backend expone las rutas bajo `/api`).
- Para habilitar tipos completos de `lodash.debounce`, instala:

```powershell
npm install -D @types/lodash.debounce
```

Contacto

Si algo no arranca, pega aquí la salida completa de la terminal y el contenido del panel "Problems" de VS Code.
# Frontend - Enciclopedia de Plantas Argentina

Frontend en React + TypeScript (Vite) que consume la API REST.

Setup rápido:

1. Copiar variables:

```powershell
cp .env.example .env.local
```

2. Instalar y correr en desarrollo:

```powershell
npm install
npm run dev
```

Build / preview:

```powershell
npm run build
npm run preview
```

Tests (Jest + React Testing Library + msw):

```powershell
npm run test
```

Notas:
- Definir VITE_API_URL en `.env.local`.
- Deploy: construir `npm run build` y servir `dist`.
