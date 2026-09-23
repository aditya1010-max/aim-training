# Aim Training

A browser-based aim training application inspired by tactical FPS aim trainers.

The project is being built with a focus on a clean React architecture, scalable game logic, and a deployment workflow that supports both traditional frontend hosting and containerized deployments.

## Tech Stack

- React
- TypeScript
- Vite
- ESLint
- Prettier
- Docker
- Nginx

## Project Goals

The goal is to build a small but scalable aim-training platform with game modes that can eventually include:

- Target clicking
- Accuracy tracking
- Reaction time
- Timed sessions
- Increasing difficulty
- Different training modes
- Score tracking
- Performance statistics

````

## Development

Clone the repository:

```bash
git clone https://github.com/aditya1010-max/aim-training.git
cd aim-training
````

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The application will be available at the local Vite development URL shown in the terminal.

## Code Quality

Format the project:

```bash
npm run format
```

Check formatting:

```bash
npm run format:check
```

Run ESLint:

```bash
npm run lint
```

Build the production application:

```bash
npm run build
```

## Docker

The application can also be built and served as a Docker container.

Build the image:

```bash
docker build -t aim-training .
```

Run the container:

```bash
docker run --name aim-training-container -p 8080:80 aim-training
```

Then open:

```text
http://localhost:8080
```

The Docker configuration is maintained separately so the same application can also be deployed as a container when needed.

### Core Game

- [ ] Game state model
- [ ] Target system
- [ ] Game board
- [ ] Timer
- [ ] Hit detection
- [ ] Score system
- [ ] Accuracy tracking
- [ ] Session completion

### Training Features

- [ ] Reaction-time tracking
- [ ] Difficulty scaling
- [ ] Multiple game modes
- [ ] Moving targets
- [ ] Target size variation
- [ ] Performance statistics
- [ ] High scores

### Future

- [ ] Persistent player statistics
- [ ] User accounts
- [ ] Leaderboards
- [ ] Additional training modes

## License

This project is currently being developed as a personal learning and development project.
