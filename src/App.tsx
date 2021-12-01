import Navigation from './routes/Navigation';
import styles from './App.module.scss';

const App: React.FC = () => {
  return (
    <main className={styles.app}>
      <Navigation />
    </main>
  );
}

export default App;
