import app from "./app";
import { PORT } from "./constants/landingPgrAPI.constants";

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
