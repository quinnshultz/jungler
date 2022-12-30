function Settings(props) {
  return (
    <Page>
      <Section
        title={<Text bold align="center">Settings</Text>}>
        <TextInput
          settingsKey="summonername"
          label="Summoner Name"
        />
      </Section>
    </Page>
  );
}

registerSettingsPage(Settings);