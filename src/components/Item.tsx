import { Card, CardContent, Typography } from "@mui/material";
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal, CSSProperties } from "react";

export default function Item(props: { text: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; style: CSSProperties | undefined; }) {
  return (
    <Card>
      <CardContent>
        <Typography sx={{ fontSize: 24 }}>{props.text}</Typography>
        <Card style={props.style}>
          <CardContent>
            <Typography sx={{ fontSize: 18 }}>未定</Typography>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  )
}