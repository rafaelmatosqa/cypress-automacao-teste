Feature: Send Feedback

  As a costumer
  I can send my feedback via form

   Scenario: Submit Feedbacl Form
    Given I open feedback page
    When I fill feedback form
    And I click on send button
    Then I see "/sendFeedback.html" in the url