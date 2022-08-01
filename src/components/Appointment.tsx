import React from "react";

interface Props {
  customer: {
    firstName: string;
  };
}

export const Appointment = ({ customer }: Props) => {
  return <div>{customer.firstName || ""}</div>;
};
