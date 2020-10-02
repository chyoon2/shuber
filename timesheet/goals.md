MVP:
-Uses a database that holds data for Gifter and Recipient
-Dynamic Gifter and Recipient pages that displays users data
-Gifters can post items and Recipients can choose said items. 

stretch:
-Ability to upload user images
-Map API
-Search functionality of Gifters posts
-add payment methods
-add shopping element/amazon api
-

Shoe properties:
-size
-date added
-condition
-type
-foot type
-brand
-uses

gifter properties:
-address
-name
-gifter since
-gifter picture
-rating

add shoes.

receiver properties:
-address
-name
-gifter since
-gifter picture
-rating
-shoe history
-

more articles to read:
https://docs.microsoft.com/en-us/aspnet/core/client-side/spa/react?view=aspnetcore-3.1&tabs=visual-studio
const SignUp = () => (
  <Container>
  <Form>
    <Form.Group>
      <Form.Control type="text" name="email" placeholder="Email" />
    </Form.Group>
    <Form.Group>
      <Form.Control type="password" name="password" placeholder="Password"/>
    </Form.Group>
      <Button variant="primary" type="submit">Sign up</Button>
  </Form>
  <p>Don't have an account? <em>hilarious</em></p>
  </Container>
);

