import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFireFlameCurved,
  faHeart,
  faHouseCrack,
  faLaptop,
  faStar,
  faVault,
  faWifi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Dialog,
  IconButton,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";

library.add(
  faHeart,
  faStar,
  faFireFlameCurved,
  faHouseCrack,
  faLaptop,
  faVault,
  faWifi
);

const ProductDialog = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <div className="my-5 flex items-center justify-center">
        <Button onClick={handleOpen} variant="gradient">
          See Product
        </Button>
      </div>

      <Dialog
        open={open}
        handler={handleOpen}
        size={"sm"}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.5, y: -100 },
        }}
      >
        <Card className="w-full max-w-[26rem] shadow-lg">
          <CardHeader floated={false} color="blue-gray">
            <img
              src="https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2717&q=80"
              alt="ui/ux review check"
            />
            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
            <IconButton
              size="sm"
              color="red"
              variant="text"
              className="!absolute right-4 top-4 rounded-full"
            >
              <FontAwesomeIcon icon="heart" size="2x" beat />
            </IconButton>
          </CardHeader>

          <CardBody>
            <div className="mb-3 flex items-center justify-between">
              <Typography
                variant="h5"
                color="blue-gray"
                className="font-medium"
              >
                Wooden House, Florida
              </Typography>
              <Typography
                color="blue-gray"
                className="flex items-center gap-1.5 font-normal"
              >
                <FontAwesomeIcon
                  icon="star"
                  size="lg"
                  color="yellow"
                  className="-mt-0.5"
                  shake
                />
                5.0
              </Typography>
            </div>

            <Typography color="gray">
              Enter a freshly updated and thoughtfully furnished peaceful home
              surrounded by ancient trees, stone walls, and open meadows.
            </Typography>

            <div className="my-2 flex flex-wrap gap-2">
              <Chip
                className="rounded-full py-1.5"
                color="green"
                value="green"
              />
              <Chip
                className="rounded-full py-1.5"
                color="amber"
                value="amber"
              />
              <Chip className="rounded-full py-1.5" color="cyan" value="cyan" />
            </div>

            <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
              <Tooltip content="$129 per night">
                <span className="cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
                  <FontAwesomeIcon icon="vault" />
                </span>
              </Tooltip>
              <Tooltip content="Free wifi">
                <span className="cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
                  <FontAwesomeIcon icon="wifi" />
                </span>
              </Tooltip>
              <Tooltip content="2 bedrooms">
                <span className="cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
                  <FontAwesomeIcon icon="house-crack" />
                </span>
              </Tooltip>
              <Tooltip content={`65" HDTV`}>
                <span className="cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
                  <FontAwesomeIcon icon="laptop" />
                </span>
              </Tooltip>
              <Tooltip content="Fire alert">
                <span className="cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
                  <FontAwesomeIcon icon="fire-flame-curved" />
                </span>
              </Tooltip>
              <Tooltip content="And +20 more">
                <span className="cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
                  +20
                </span>
              </Tooltip>
            </div>
          </CardBody>

          <CardFooter className="pt-3">
            <Button size="lg" fullWidth={true} onClick={handleOpen}>
              Reserve
            </Button>
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
};

export default ProductDialog;
