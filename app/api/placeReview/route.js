export async function GET(request) {
  const apiKey = 'AIzaSyCemcFUJTtSY4pL6RaAL48N8uU3PT0pof8';
  const placeId = 'ChIJAfUrG0VEBEcRtEycalTUIso';
  const url = `https://maps.googleapis.com/maps/api/place/details/json?${placeId}&key=${apiKey}`;
  try {
    const { placeId } = req.query;
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=YOUR_API_KEY`
    );
    console.log(response);
    // res.status(200).json(response.data);
  } catch (error) {
    console.error('Error fetching reviews:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
