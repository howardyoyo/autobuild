# The feature is a high level overview of the... feature.

Feature: Add new task to the todo list
Todo lists wouldn't be very effective if you couldn't add new items to them.

# The scenario is a concrete example illustrating a business rule, consisting of steps.
# Steps are unlimited, but 3-5 is a common guideline. More steps mean they lose their 
# expressive power as specs and documentation. They follow this pattern:

#Describe an initial context - something that happened in the past
#Describe an event
#Describe an expected outcome

# When Cucumber executes a Given step it will configure the system to be in a well-defined state, such as 
# creating and configuring objects or adding data to the test database.
# It's ok to have several Given steps (just use And or But for number 2 and upwards to make it more readable)

# When steps are used to describe an event or action. This can be a person interacting with the system, or it # can be an event triggered by another system.
# It's strongly recommended you only have a single When step per scenario. If you feel compelled to add more # it's usually a sign that you should split the scenario up in multiple scenarios.

# Then steps are used to describe an expected outcome or result.
# The step definition of a Then step should use an ASSERTION to compare the actual outcome (what the system 
# actually does) to the expected outcome (what the step says the system is supposed to do).

Scenario: Add an item
Given Webpage has loaded
And Textbox entry is visible
And Add button is visible
When User enters text into Textbox
And left clicks on Add item button
Then Text entered into textbox is now added to bottom of list
And textbox is now empty

Scenario: Retain added items after page reload/close
Given Webpage has loaded
And there are items on the todo list
When Close/reload the webpage
Then All previous items listed should still be there

Scenario: The right things happening when pressing Add with an empty field (error message, nothing added to the list)
Given Webpage has loaded
When textbox is empty
And User left clicks on Add item button
Then error message appears telling user to write something
And list contents stay the same


