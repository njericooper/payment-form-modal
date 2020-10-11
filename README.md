# Stripe Elements modal demo

This sample shows how to implement [Stripe Elements](https://stripe.com/payments/elements) within a modal dialog using the following APIs.

- [Payment Intents API](https://stripe.com/docs/payments/payment-intents/quickstart#automatic-confirmation-flow) reference implementation with Payment Intents API in [the cards only folder](cards-only).

- [Payment Request API (i.e Apple Pay)](https://stripe.com/docs/stripe-js/elements/payment-request-button) reference implementation with PaymentIntents in [the cards and mobile wallets folder](cards-and-mobile-wallets).

**Demo**

See a hosted version of the [sample](https://9qmxf.sse.codesandbox.io/) in test mode or [fork on codesandbox.io](https://codesandbox.io/s/stripe-payment-form-modal-9qmxf)

The hosted demo is running in test mode -- use `4242424242424242` as a test card number with any CVC + future expiration date.

Use the `4000000000003220` test card number to trigger a 3D Secure challenge flow.

Read more about test cards on Stripe at https://stripe.com/docs/testing.


#### Payment success

![Elements modal](cards-and-mobile-wallets/payment-request-3d-secure.gif)

#### Payment declined

![Elements modal payment declined](cards-and-mobile-wallets/payment-request-3d-secure-fail.gif)

## Author

[@ctrudeau-stripe](https://twitter.com/trudeaucj)
