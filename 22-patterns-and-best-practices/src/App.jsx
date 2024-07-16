import Accordion from './components/Accordions/Accordion';

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
    </main>
  );
}

export default App;
