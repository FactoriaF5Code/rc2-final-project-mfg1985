
#"Rescata los sabores de la memoria. Cocina con las recetas de la abuela, ahora en una app."

## Cómo lanzar el proyecto

### Frontend

```
cd frontend 
npm install 
npm run dev
```

### Backend

- Se utiliza una base de datos H2 (en memoria)

```
cd backend
mvn spring-boot:run
```

### TODO

- Usar plantillas (layouts) para las partes comunes del router
- Meter una capa de datos para acceder al backend (por ejemplo usand axios)
- Renombrar componentes ?