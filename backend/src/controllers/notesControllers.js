// Logic for simple GET all notes
export function getAllNotes(req, res) {
  // Also send 200 status code
  res.status(200).send("You got Fetched Notes in the system from controller");
}
