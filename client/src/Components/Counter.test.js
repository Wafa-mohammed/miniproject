import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Counter from "./Counter";

describe("Counter", () => {
  it("counter displays correct initial count", () => {
    render(<Counter initialCount={5} />);
    const h3element = screen.getByTestId("count");
    expect(h3element).toHaveTextContent(5);
  });

  it("increments the count when the increment button is clicked", () => {
    render(<Counter initialCount={5} />);
    const h3element = screen.getByTestId("count");
    const btnelement = screen.getByTestId("increment");
    fireEvent.click(btnelement);
    expect(h3element).toHaveTextContent(6);
  });

  it("decrements the count when the decrement button is clicked", () => {
    render(<Counter initialCount={5} />);
    const h3element = screen.getByTestId("count");
    const btnelement = screen.getByTestId("decrement");
    fireEvent.click(btnelement);
    expect(h3element).toHaveTextContent(4);
  });

  it("resets the count to 0 when the restart button is clicked", () => {
    render(<Counter initialCount={5} />);
    const h3element = screen.getByTestId("count");
    const btnelement = screen.getByTestId("restart");
    fireEvent.click(btnelement);
    expect(h3element).toHaveTextContent(0);
  });

  it("displays 'Goal reached!' when the count meets or exceeds the goal", () => {
    render(<Counter initialCount={10} />);
    const messageElement = screen.getByText(/Goal reached!/i);
    expect(messageElement).toBeInTheDocument();
  });

  it("displays the goal when the count is below the goal", () => {
    render(<Counter initialCount={5} />);
    const messageElement = screen.getByText(/Goal: 5/i); // As the goal default is 5
    expect(messageElement).toBeInTheDocument();
  });

  it("displays the correct goal message based on the selected goal", () => {
    render(<Counter initialCount={5} />);
    
    // Check for the presence of goal options
    const goalElement = screen.getByText(/Goal List:/i);
    expect(goalElement).toBeInTheDocument();
    
    // Select a specific goal
    const goalItem = screen.getByText(/Do Exercise/);
    fireEvent.click(goalItem);
    
    // Check the goal message is updated
    const goalMessage = screen.getByText(/Great job! Regular exercise is key to staying healthy./i);
    expect(goalMessage).toBeInTheDocument();
  });

  it("displays the correct goal message for a custom goal", async () => {
    render(<Counter initialCount={5} />);
    
    // Enter a custom goal (e.g., 3)
    const inputElement = screen.getByPlaceholderText("Enter your custom goal (e.g., 5)");
    fireEvent.change(inputElement, { target: { value: "3" } });
    
    const setGoalButton = screen.getByText(/Set Custom Goal/i);
    fireEvent.click(setGoalButton);
    
    // Verify the goal has been set
    expect(screen.getByText(/Goal: 3/i)).toBeInTheDocument();

    // Increment the count until goal is reached
    const incrementButton = screen.getByTestId("increment");
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    
    // Check for 'Goal reached!' message
    await waitFor(() => screen.getByText(/Goal reached!/i));
    expect(screen.getByText(/Goal reached!/i)).toBeInTheDocument();
  });

  
  it("closes the hint message when 'Got it! Let's start' button is clicked", () => {
    render(<Counter initialCount={5} />);
    const hintMessage = screen.getByText(/Welcome to the Goal Tracker!/i);
    expect(hintMessage).toBeInTheDocument();

    const closeButton = screen.getByText(/Got it! Let's start/i);
    fireEvent.click(closeButton);

    // Check if the hint message is removed after clicking the button
    expect(hintMessage).not.toBeInTheDocument();
  });

  it("hides the hint message after 10 seconds automatically", () => {
    render(<Counter initialCount={5} />);
    const hintMessage = screen.getByText(/Welcome to the Goal Tracker!/i);
    expect(hintMessage).toBeInTheDocument();

    // Wait for 10 seconds and then check that the hint is hidden
    setTimeout(() => {
      expect(hintMessage).not.toBeInTheDocument();
    }, 10000);
  });
});
