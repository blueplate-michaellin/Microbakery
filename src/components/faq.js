import React from "react"

const Faq = () => (
  <div className="valignWrapper faqWrapper">
    <h2 className = "sectionTitle">FAQ</h2>
      <ul uk-accordion="multiple: true">
      <li>
          <a className="uk-accordion-title" href="#">HOW TO ORDER?</a>
          <div className="uk-accordion-content">
              <p>Click on order button, then the browser will divert you to a chat section with us on Whatsapp. Simply message us your order details, and we should be able to get back to you within 2 hours time.</p>
          </div>
      </li>
      <li>
          <a className="uk-accordion-title" href="#">HOW ADVANCE SHOULD I ORDER?</a>
          <div className="uk-accordion-content">
              <p>Please order your bread <u>at least 2 days</u> in advance. We bake to order and sourdough requires a long fermentation to develop good flavours, so please understand.</p>
          </div>
      </li>
      <li>
          <a className="uk-accordion-title" href="#">HOW TO PAY?</a>
          <div className="uk-accordion-content">
              <p>Please pay us in cash upon receiving your bread. Appreciate if you could prepare the exact amount.</p>
          </div>
      </li>
        <li className="uk-open">
            <a className="uk-accordion-title" href="#">DO YOU DO DELIVERY?</a>
            <div className="uk-accordion-content">
              <p>Just like our name, we are running this in a micro scale, so we can only delivery within the city area. These are the areas that are available for delivery, with additional $2 delivery charge:</p>
              <ul>
                <li>Tiong Bahru</li>
                <li>Outram Park</li>
                <li>Tanjong Pargar</li>
                <li>Raffles Place</li>
                <li>City Hall</li>
                <li>Bugis</li>
                <li>Lavendar</li>
                <li>Clarke Quay</li>
                <li>River Valley</li>
                <li>Dohby Ghaut</li>
                <li>Orchard</li>
                <li>Somerset</li>
              </ul>
            </div>
        </li>
        <li>
            <a className="uk-accordion-title" href="#">HOW LONG CAN SOURDOUGH BREAD LAST?</a>
            <div className="uk-accordion-content">
                <p>Sourdough bread can generally last longer than normal bread due to the added fermentation process. It has a strong resistance to mold, so typically it can last for more than 10 days. But then, as long as you don't see mold building up on the surface of the bread, it is still safe to consume.</p>
            </div>
        </li>
    </ul>
  </div>
)

export default Faq
