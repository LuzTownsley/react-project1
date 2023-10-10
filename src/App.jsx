import './App.css';
import Avatar from './avatar';
import Badge from './badge';
import Card from './card';
import Counter from './counter';
import Footer from './footer';
import Header from './header';
import flowers from './flowers.jpeg'

function App() {
  return (
    <div className="App">
      {/* Header component **/}
      <Header title="React Beginner's Quiz" />

      <div className="card-container">
        {/* Three Card components */}
        <Card title="Card 1" content="Content for Card 1" />
        <Card title="Card 2" content="Content for Card 2" />
        <Card title="Card 3" content="Content for Card 3">
          <Counter />
        </Card>
       
        {/* Badge component */}
        <Badge label="New!" />

        {/* Avatar component */}
        <Avatar
          imageSrc={flowers}
          description="Your Avatar"
        />
      </div>

      {/* Footer component */}
      <Footer content="Created with ❤️ by [Luz]" />
    </div>
  );
}

export default App;







