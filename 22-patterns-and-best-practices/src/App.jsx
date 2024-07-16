import Accordion from './components/Accordions/Accordion';
import SearchableList from './components/SearchableList/SearchableList';
import savannaImg from './assets/african-savanna.jpg';
import amazonImg from './assets/amazon-river.jpg';
import caribbeanImg from './assets/caribbean-beach.jpg';
import desertImg from './assets/desert-dunes.jpg';
import forestImg from './assets/forest-waterfall.jpg';
import Place from './Place';

const PLACES = [
  {
    id: 'african-savanna',
    image: savannaImg,
    title: 'African Savanna',
    description: 'Experience the beauty of nature.',
  },
  {
    id: 'amazon-river',
    image: amazonImg,
    title: 'Amazon River',
    description: 'Get to know the largest river in the world.',
  },
  {
    id: 'caribbean-beach',
    image: caribbeanImg,
    title: 'Caribbean Beach',
    description: 'Enjoy the sun and the beach.',
  },
  {
    id: 'desert-dunes',
    image: desertImg,
    title: 'Desert Dunes',
    description: 'Discover the desert life.',
  },
  {
    id: 'forest-waterfall',
    image: forestImg,
    title: 'Forest Waterfall',
    description: 'Listen to the sound of the water.',
  },
];

function App() {
  return (
    <main>
      <section>
        <h2>Why Work With Us?</h2>

        <Accordion className='accordion'>
          <Accordion.Item
            id='accordion-1'
            className='accordion-item'
            title='We got 20 years of experience'>
            <article>
              <p>You can&apos;t go wrong with us.</p>
              <p>
                We are in the bussiness of planning highly vacations trips for
                more than 20 years
              </p>
            </article>
          </Accordion.Item>

          <Accordion.Item
            id='accordion-2'
            className='accordion-item'
            title='We are working with local guides'>
            <article>
              <p>You can&apos;t go wrong with us.</p>
              <p>
                We are in the bussiness of planning highly vacations trips for
                more than 20 years
              </p>
            </article>
          </Accordion.Item>
        </Accordion>
      </section>
      <section>
        <SearchableList items={PLACES} itemKeyFn={(item) => item.id}>
          {(item) => <Place item={item} />}
        </SearchableList>
      </section>
    </main>
  );
}

export default App;
