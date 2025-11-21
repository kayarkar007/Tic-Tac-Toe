# Tic Tac Toe - With Coin Toss

A modern, interactive **Tic Tac Toe** game built with **React**, **Vite**, and **Tailwind CSS**. Features a coin toss mechanism to fairly decide which player starts first!

## 🎮 Features

- ✨ **Coin Toss**: Fair player selection using a coin flip (Heads/Tails)
- 🎯 **Classic Tic Tac Toe**: 3x3 grid gameplay with X and O players
- 🏆 **Winner Detection**: Automatic winner announcement with 8 winning patterns
- 🔄 **Auto-Reset**: Game auto-resets 2 seconds after a win or draw
- 📱 **Responsive Design**: Built with Tailwind CSS for modern UI
- ⚡ **Fast & Smooth**: Powered by Vite for instant HMR (Hot Module Replacement)

## 🛠️ Tech Stack

- **React 19.2.0** - UI framework
- **Vite 7.2.2** - Fast build tool and dev server
- **Tailwind CSS 4.1.17** - Utility-first CSS framework
- **@tailwindcss/vite** - Tailwind integration with Vite
- **ESLint** - Code quality and linting

## 📋 Project Structure

```
tik-tak-toe/
├── src/
│   ├── Components/
│   │   └── TikTakToeBox.jsx      # Main game component (board, toss, logic)
│   ├── App.jsx                   # Root app component
│   ├── App.css                   # App styles
│   ├── index.css                 # Global styles & Tailwind imports
│   └── main.jsx                  # React entry point
├── index.html                    # HTML template
├── vite.config.js                # Vite configuration
├── tailwind.config.cjs           # Tailwind configuration
├── postcss.config.cjs            # PostCSS configuration
├── package.json                  # Dependencies & scripts
└── README.md                     # This file
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18+ and **npm** v9+

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/kayarkar007/tik-tak-toe.git
   cd tik-tak-toe
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the dev server:**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173/`

### Build for Production

```bash
npm run build
```

The optimized build will be generated in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

### Lint Code

```bash
npm run lint
```

## 🎯 How to Play

1. **Coin Toss Phase:**
   - Select **Heads** or **Tails**
   - Click the **Flip** button to see the result
   - The winner of the toss gets to play as **X** (first move)

2. **Game Phase:**
   - Players take turns clicking on empty squares
   - **X** always makes the first move (determined by coin toss)
   - **O** is the second player
   - First to get 3 in a row (horizontal, vertical, or diagonal) wins!

3. **Game End:**
   - The app announces the winner or declares a draw
   - Automatically resets after 2 seconds

4. **Manual Reset:**
   - Click the **Reset** button to start a new game immediately

## 📊 Winning Patterns

The game checks these 8 patterns for a winner:
- **Rows:** (0,1,2), (3,4,5), (6,7,8)
- **Columns:** (0,3,6), (1,4,7), (2,5,8)
- **Diagonals:** (0,4,8), (2,4,6)

## 🎨 Customization

### Change Colors

Edit `src/index.css` or `src/Components/TikTakToeBox.jsx` to modify Tailwind classes:
- Board background: `bg-gray-800` → any Tailwind color
- Text color: `text-white` → any Tailwind text color
- Button styles: Modify hover states and active states

### Adjust Board Size

In `src/Components/TikTakToeBox.jsx`, change the grid cell dimensions:
```jsx
<div
  className="w-20 h-20 flex items-center justify-center"  // Change w-20 h-20 to adjust
  // ...
>
```

### Change Auto-Reset Timer

In `src/Components/TikTakToeBox.jsx`, modify the timeout duration (default: 2000ms):
```jsx
const timer = setTimeout(() => {
  resetGame();
}, 2000);  // Change this value
```

## 🐛 Known Issues & Future Enhancements

- [ ] Multiplayer support (online/local)
- [ ] Game history/statistics
- [ ] Difficulty levels (AI opponent)
- [ ] Mobile app version
- [ ] Sound effects and animations
- [ ] Theme switcher (dark/light mode)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Pavan Kalyan**

Feel free to fork this project and submit pull requests for any improvements!

---

**Made with ❤️ by pavan kalyan kayarkar using React + Vite + Tailwind CSS**
