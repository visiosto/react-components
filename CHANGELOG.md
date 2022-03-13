# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com), and this project adheres to [Semantic Versioning](https://semver.org).

## [0.14.0] - 2022-03-13

### Removed

- Heading styles from the global styles.

## [0.13.1] - 2022-02-27

### Fixed

- `Icon`’s `className` not working by moving it back to the back of the list.

## [0.13.0] - 2022-02-27

### Added

- Classes to create Material icons from `span`s to add icons to Markdown.
- Property to `GlobalStyle` for adding custom styles.
- `business` icon to `Icon`.
- `cloud` icon to `Icon`.
- Property to `Icon` to modify the style of the icons.
- `download` icon to `Icon`.
- `file_download` icon to `Icon`.
- `cloud_download` icon to `Icon`.
- All of the different icon styles to the sizes in GlobalStyle.

### Changed

- Name of the type `Icons` to `IconName`.

### Fixed

- `Icon`’s `className` not working as it was the last class in the list.

## [0.12.0] - 2022-01-29

### Added

- `noIcon` property to the external link to exclude the icon from the component.

## [0.11.0] - 2022-01-29

### Added

- `className` property to the external link component to make it function with styled-components.

### Removed

- Cookie settings class from the global style as the library doesn’t have the cookie component.

## [0.10.0] - 2021-12-04

### Added

- Option for setting the alignment of the icon in the button component with the built-in icon.

## [0.9.1] - 2021-12-04

### Added

- Default negative left margin to the icons in the icon buttons.

## [0.9.0] - 2021-12-04

### Added

- Button component with a built-in icon.

## [0.8.0] - 2021-12-04

### Added

- `language` icon.

## [0.7.0] - 2021-12-04

### Added

- External link component that has an icon indicating that the link opens in a new tab.

## [0.6.0] - 2021-11-25

### Added

- Separate type for icons.

## [0.5.0] - 2021-11-12

### Added

- Colour scheme listener hook to use with the theme context.
- Utilities for getting and setting cookies.
- Utility for encoding form state.

## [0.4.1] - 2021-11-04

### Changed

- `styled-components` from development dependency to dependency to fix missing depndency.

## [0.4.0] - 2021-11-01

### Added

- Switch checkbox component.
- Some constants to exports.

## [0.3.0] - 2021-10-30

### Changed

- Name of the project from `platform-gatsby` to `react-components`.

## [0.2.1] - 2021-10-30

### Added

- Global style to fix the missing default style.

## [0.2.0] - 2021-10-30

### Fixed

- Building and publishing the package.

## [0.1.2] - 2021-10-29

### Fixed

- Accessing the npm access token.

## [0.1.1] - 2021-10-29

### Fixed

- Publishing to the `npm` registry.

## [0.1.0] - 2021-10-29

### Added

- App and theme wrapper components.
- Font stack utility.
- Base theme for projects using the package.
- Button component.
- Card component.
- Material icon component.

[unreleased]: https://github.com/visiosto/react-components/compare/v0.14.0...HEAD
[0.14.0]: https://github.com/visiosto/react-components/compare/v0.13.1...v0.14.0
[0.13.1]: https://github.com/visiosto/react-components/compare/v0.13.0...v0.13.1
[0.13.0]: https://github.com/visiosto/react-components/compare/v0.12.0...v0.13.0
[0.12.0]: https://github.com/visiosto/react-components/compare/v0.11.0...v0.12.0
[0.11.0]: https://github.com/visiosto/react-components/compare/v0.10.0...v0.11.0
[0.10.0]: https://github.com/visiosto/react-components/compare/v0.9.1...v0.10.0
[0.9.1]: https://github.com/visiosto/react-components/compare/v0.9.0...v0.9.1
[0.9.0]: https://github.com/visiosto/react-components/compare/v0.8.0...v0.9.0
[0.8.0]: https://github.com/visiosto/react-components/compare/v0.7.0...v0.8.0
[0.7.0]: https://github.com/visiosto/react-components/compare/v0.6.0...v0.7.0
[0.6.0]: https://github.com/visiosto/react-components/compare/v0.5.0...v0.6.0
[0.5.0]: https://github.com/visiosto/react-components/compare/v0.4.1...v0.5.0
[0.4.1]: https://github.com/visiosto/react-components/compare/v0.4.0...v0.4.1
[0.4.0]: https://github.com/visiosto/react-components/compare/v0.3.0...v0.4.0
[0.3.0]: https://github.com/visiosto/react-components/compare/v0.2.1...v0.3.0
[0.2.1]: https://github.com/visiosto/react-components/compare/v0.2.0...v0.2.1
[0.2.0]: https://github.com/visiosto/react-components/compare/v0.1.2...v0.2.0
[0.1.2]: https://github.com/visiosto/react-components/compare/v0.1.1...v0.1.2
[0.1.1]: https://github.com/visiosto/react-components/compare/v0.1.0...v0.1.1
[0.1.0]: https://github.com/visiosto/react-components/releases/tag/v0.1.0
