import { Card, CardContent, Typography } from "@mui/material";

export default function CircleGraph(props) {
  return (
    <Card>
      <CardContent>
        <Typography sx={{ fontSize: 24 }}>{props.text}</Typography>
        <Card style={props.style}>
          <CardContent>
            <Typography sx={{ fontSize: 18 }}>円グラフがここにきます</Typography>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  )
}