import React from 'react';
import { Grid, TextField } from '@material-ui/core';
import { Controller } from 'react-hook-form';

const AddressInput = ({ name, label, control }) => {
  return (
    <Grid item xs={12} sm={6}>
      <Controller
        name={name}
        control={control}
        rules={{ required: true }}
        render={({ field }) => <TextField label={label} {...field} />}
      />
    </Grid>
  );
};

export default AddressInput;
